import { useEffect, useState } from 'react';
import InitialRevealContext from './InitialRevealContext';
import './InitialCurtain.css';

// ==============================
// CURTAIN TIMING CONTROLS
// ==============================

const LOADER_CYCLE_DURATION = 1200;
const MAX_LOADING_PROGRESS = 0.99;
const MAX_LOADING_DURATION = LOADER_CYCLE_DURATION * MAX_LOADING_PROGRESS;
const CURTAIN_DURATION = 1000;

function waitForWindowLoad(signal) {
  if (document.readyState === 'complete') return Promise.resolve();

  return new Promise((resolve) => {
    const finish = () => {
      window.removeEventListener('load', finish);
      signal.removeEventListener('abort', finish);
      resolve();
    };

    window.addEventListener('load', finish, { once: true });
    signal.addEventListener('abort', finish, { once: true });
  });
}

function waitForInitialAssets(signal) {
  const fontsReady =
    document.fonts?.ready?.catch(() => {}) ?? Promise.resolve();

  return Promise.all([waitForWindowLoad(signal), fontsReady]);
}

function InitialCurtainProvider({ children }) {
  const [phase, setPhase] = useState('loading');

  const isRevealEnabled = phase === 'opened';
  const isCurtainVisible = phase !== 'opened';

  // Open as soon as the page and fonts are ready, or when progress reaches 96%.
  useEffect(() => {
    if (window.matchMedia('(max-width: 640px)').matches) {
      setPhase('opened');
      return undefined;
    }

    let cancelled = false;
    let opened = false;
    const controller = new AbortController();
    let fallbackTimer;

    const openCurtain = () => {
      if (cancelled || opened) return;

      opened = true;
      window.clearTimeout(fallbackTimer);
      controller.abort();
      setPhase('opening');
    };

    fallbackTimer = window.setTimeout(openCurtain, MAX_LOADING_DURATION);
    waitForInitialAssets(controller.signal).then(openCurtain);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      controller.abort();
    };
  }, []);

  // Curtain opening fallback
  useEffect(() => {
    if (phase !== 'opening') return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const fallbackTimer = window.setTimeout(
      () => setPhase('opened'),
      prefersReducedMotion ? 0 : CURTAIN_DURATION + 80,
    );

    return () => window.clearTimeout(fallbackTimer);
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
      currentPhase === 'opening' ? 'opened' : currentPhase,
    );
  };

  return (
    <>
      <InitialRevealContext.Provider value={isRevealEnabled}>
        {children}
      </InitialRevealContext.Provider>

      {isCurtainVisible && (
        <div
          className={`initial-curtain ${phase === 'opening' ? 'is-opening' : ''}`}
          style={{
            '--curtain-duration': `${CURTAIN_DURATION}ms`,
            '--loader-cycle-duration': `${LOADER_CYCLE_DURATION}ms`,
            '--loader-max-progress': MAX_LOADING_PROGRESS,
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
