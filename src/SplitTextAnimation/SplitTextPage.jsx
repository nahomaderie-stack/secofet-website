import { useContext, useLayoutEffect, useRef } from 'react';
import InitialRevealContext from './InitialRevealContext';
import { prepareSplitTextReveal } from './observeSplitTextReveal';
import './HomeTextReveal.css';

const MOBILE_VIEWPORT_QUERY = '(max-width: 640px)';

function shouldPrepareReveal(mobileOnly, desktopOnly) {
  const isMobileViewport = window.matchMedia(MOBILE_VIEWPORT_QUERY).matches;

  return (
    (!mobileOnly || isMobileViewport) &&
    (!desktopOnly || !isMobileViewport)
  );
}

function SplitTextPage({ children, mobileOnly = false, desktopOnly = false }) {
  const contentRef = useRef(null);
  const revealControllerRef = useRef(null);
  const isRevealEnabled = useContext(InitialRevealContext);

  useLayoutEffect(() => {
    if (!shouldPrepareReveal(mobileOnly, desktopOnly)) {
      revealControllerRef.current = null;
      return undefined;
    }

    const revealController = prepareSplitTextReveal(contentRef.current);
    revealControllerRef.current = revealController;

    return () => {
      revealController.cleanup();
      if (revealControllerRef.current === revealController) {
        revealControllerRef.current = null;
      }
    };
  }, [mobileOnly, desktopOnly]);

  useLayoutEffect(() => {
    if (
      !isRevealEnabled ||
      !shouldPrepareReveal(mobileOnly, desktopOnly)
    ) {
      return undefined;
    }

    return revealControllerRef.current?.activate();
  }, [isRevealEnabled, mobileOnly, desktopOnly]);

  return (
    <div ref={contentRef} className="split-text-page-content">
      {children}
    </div>
  );
}

export default SplitTextPage;
