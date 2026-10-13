const TEXT_BLOCK_SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption, small, span, strong, em, div';

const SEMANTIC_TEXT_SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption, small';

const HERO_ACTION_SELECTOR = [
  '.hero-section .hero-cta-group > a',
  '.our-coffees-hero .hero-actions > a',
  '.origins-hero .origins-hero-actions > a',
].join(', ');

const SKIP_SELECTOR = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  'option',
  'summary',
  'svg',
  'canvas',
  'audio',
  'video',
  '.origin-dots',
  '.carousel-dots',
  '.stat-value',
  '.split-reveal-manual',
  '[role="button"]',
  '[role="link"]',
  '[role="menuitem"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="switch"]',
  '[role="tab"]',
  '[role="slider"]',
  '[role="combobox"]',
  '[role="option"]',
  '[contenteditable="true"]',
  '[tabindex]',
].join(', ');

function isInteractiveLabel(element) {
  return (
    element.tagName === 'LABEL' &&
    (element.htmlFor ||
      element.querySelector(
        'button, input, meter, output, progress, select, textarea',
      ))
  );
}

function isWithinSkippedContent(element) {
  let current = element;

  while (current) {
    if (current.matches(SKIP_SELECTOR) || isInteractiveLabel(current)) {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}

function hasDirectText(element) {
  return Array.from(element.childNodes).some(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );
}

function isTextBlock(element) {
  if (!element.textContent.trim() || isWithinSkippedContent(element)) return false;

  if (
    element.tagName === 'DIV' &&
    (!hasDirectText(element) || element.querySelector(SEMANTIC_TEXT_SELECTOR))
  ) {
    return false;
  }

  return true;
}

function getTopLevelTextBlocks(root) {
  const candidates = Array.from(root.querySelectorAll(TEXT_BLOCK_SELECTOR)).filter(
    isTextBlock,
  );
  const candidateSet = new Set(candidates);

  return candidates.filter((element) => {
    let ancestor = element.parentElement;

    while (ancestor && ancestor !== root) {
      if (candidateSet.has(ancestor)) return false;
      ancestor = ancestor.parentElement;
    }

    return true;
  });
}

function collectTextNodes(element, collected) {
  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim()) collected.push(node);
      return;
    }

    if (
      node.nodeType === Node.ELEMENT_NODE &&
      !isWithinSkippedContent(node) &&
      !node.classList.contains('split-reveal-word')
    ) {
      collectTextNodes(node, collected);
    }
  });
}

function splitBlockWords(block) {
  const textNodes = [];
  collectTextNodes(block, textNodes);

  let wordIndex = Number(block.dataset.splitRevealWordCount) || 0;

  textNodes.forEach((textNode) => {
    const segments = textNode.textContent.match(/\s+|[^\s]+/g) || [];
    const fragment = document.createDocumentFragment();

    segments.forEach((segment) => {
      if (/^\s+$/.test(segment)) {
        fragment.appendChild(document.createTextNode(segment));
        return;
      }

      const word = document.createElement('span');
      word.className = 'split-reveal-word';

      const wordInner = document.createElement('span');
      wordInner.className = 'split-reveal-word-inner';
      wordInner.style.setProperty('--split-word-index', wordIndex);
      wordInner.textContent = segment;

      word.appendChild(wordInner);
      fragment.appendChild(word);
      wordIndex += 1;
    });

    textNode.parentNode.replaceChild(fragment, textNode);
  });

  block.dataset.splitRevealWordCount = String(wordIndex);
  return wordIndex > 0;
}

export function prepareSplitTextReveal(root) {
  if (
    !root ||
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return {
      activate: () => undefined,
      cleanup: () => {},
    };
  }

  let intersectionObserver = null;

  const prepareTextBlocks = () => {
    getTopLevelTextBlocks(root).forEach((block) => {
      const hasWords = splitBlockWords(block);
      if (!hasWords) return;

      block.classList.add('split-reveal-block');
      intersectionObserver?.observe(block);
    });

    root.querySelectorAll(HERO_ACTION_SELECTOR).forEach((action, index) => {
      if (action.classList.contains('split-reveal-hero-action')) return;

      action.classList.add('split-reveal-hero-action', 'split-reveal-block');
      action.style.setProperty('--split-action-index', index);
      intersectionObserver?.observe(action);
    });
  };

  root.classList.add('split-reveal-ready');
  prepareTextBlocks();

  const mutationObserver = new MutationObserver(prepareTextBlocks);
  mutationObserver.observe(root, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  return {
    activate() {
      if (intersectionObserver) return undefined;

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              'split-reveal-visible',
              entry.isIntersecting,
            );
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );

      root.querySelectorAll('.split-reveal-block').forEach((block) => {
        intersectionObserver.observe(block);
      });

      return () => {
        intersectionObserver?.disconnect();
        intersectionObserver = null;
        root.querySelectorAll('.split-reveal-block').forEach((block) => {
          block.classList.remove('split-reveal-visible');
        });
      };
    },
    cleanup() {
      mutationObserver.disconnect();
      intersectionObserver?.disconnect();
      root.classList.remove('split-reveal-ready');
      root.querySelectorAll('.split-reveal-block').forEach((block) => {
        block.classList.remove('split-reveal-visible');
      });
      root.querySelectorAll('.split-reveal-hero-action').forEach((action) => {
        action.classList.remove('split-reveal-hero-action', 'split-reveal-block');
        action.style.removeProperty('--split-action-index');
      });
    },
  };
}
