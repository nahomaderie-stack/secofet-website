import { useEffect, useState } from 'react';
import InitialRevealContext from './InitialRevealContext';
import './InitialCurtain.css';

// ==============================
// CURTAIN TIMING CONTROLS
// ==============================

const WHITE_SCREEN_DURATION = 900; // White screen waiting time
const CURTAIN_DURATION = 800; // Curtain opening animation

function waitForWindowLoad() {
  if (document.readyState === 'complete') return Promise.resolve();

  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true });
  });
}

function waitForImage(image) {
  image.loading = 'eager';

  const imageLoaded = image.complete
    ? Promise.resolve()
    : new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });

  return imageLoaded.then(() =>
    typeof image.decode === 'function'
      ? image.decode().catch(() => {})
      : undefined,
  );
}

async function waitForInitialAssets() {
  await waitForWindowLoad();

  const pageImages = Array.from(document.images);

  const fontsReady =
    document.fonts?.ready?.catch(() => {}) ?? Promise.resolve();

  await Promise.all([fontsReady, ...pageImages.map(waitForImage)]);
}

function InitialCurtainProvider({ children }) {
  const [phase, setPhase] = useState('loading');

  const isRevealEnabled = phase === 'opened';
  const isCurtainVisible = phase !== 'opened';

  // Wait for BOTH:
  // 1. Minimum white-screen duration
  // 2. Initial assets to finish loading
  useEffect(() => {
    let cancelled = false;

    const minimumTime = new Promise((resolve) => {
      window.setTimeout(resolve, WHITE_SCREEN_DURATION);
    });

    Promise.all([waitForInitialAssets(), minimumTime]).then(() => {
      if (!cancelled) {
        setPhase('opening');
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Curtain opening fallback
  useEffect(() => {
    if (phase !== 'opening') return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const fallbackTimer = window.setTimeout(
      () => setPhase('revealed'),
      prefersReducedMotion ? 80 : CURTAIN_DURATION + 100,
    );

    return () => window.clearTimeout(fallbackTimer);
  }, [phase]);

  // Give the fully revealed page a short beat before starting split-text motion.
  useEffect(() => {
    if (phase !== 'revealed') return undefined;

    const revealTimer = window.setTimeout(() => setPhase('opened'), 350);
    return () => window.clearTimeout(revealTimer);
  }, [phase]);

  const finishOpening = (event) => {
    if (
      event &&
      (event.target !== event.currentTarget ||
        event.propertyName !== 'transform')
    ) {
      return;
    }

    setPhase((currentPhase) =>
      currentPhase === 'opening' ? 'revealed' : currentPhase,
    );
  };

  return (
    <>
      <InitialRevealContext.Provider value={isRevealEnabled}>
        {children}
      </InitialRevealContext.Provider>

      {isCurtainVisible && (
        <div
          className={`initial-curtain ${
            phase === 'opening'
              ? 'is-opening'
              : phase === 'revealed'
                ? 'is-blank'
                : ''
          }`}
          style={{
            '--curtain-duration': `${CURTAIN_DURATION}ms`,
          }}
          aria-hidden="true"
        >
          <div
            className="initial-curtain__panel"
            onTransitionEnd={finishOpening}
          >
            <span className="initial-curtain__loader" />
          </div>
        </div>
      )}
    </>
  );
}

export default InitialCurtainProvider;
