import { useEffect, useRef, useState } from 'react';
import '../styles/CookieConsent.css';

const readCookieConsent = () => {
  let savedConsent;

  try {
    savedConsent = window.localStorage.getItem('cookieConsent');
  } catch {
    return { hasSavedConsent: false, analytics: false, marketing: false };
  }

  if (!savedConsent) {
    return { hasSavedConsent: false, analytics: false, marketing: false };
  }

  if (savedConsent === 'accepted') {
    return { hasSavedConsent: true, analytics: true, marketing: true };
  }

  if (savedConsent === 'declined') {
    return { hasSavedConsent: true, analytics: false, marketing: false };
  }

  try {
    const parsedConsent = JSON.parse(savedConsent);

    if (
      parsedConsent &&
      typeof parsedConsent === 'object' &&
      !Array.isArray(parsedConsent)
    ) {
      return {
        hasSavedConsent: true,
        analytics: Boolean(parsedConsent.analytics),
        marketing: Boolean(parsedConsent.marketing),
      };
    }
  } catch {
    // Treat invalid saved data as no choice so the banner can be shown again.
  }

  return { hasSavedConsent: false, analytics: false, marketing: false };
};

const CookieConsent = () => {
  const [initialConsent] = useState(readCookieConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(initialConsent.analytics);
  const [marketing, setMarketing] = useState(initialConsent.marketing);

  const dismissTimer = useRef(null);
  const manageButtonRef = useRef(null);
  const preferencesDialogRef = useRef(null);

  const saveConsent = (value) => {
    try {
      window.localStorage.setItem('cookieConsent', value);
    } catch {
      // Keep the consent banner usable when browser storage is unavailable.
    }
  };

  // Show the banner after page load only when no valid choice is stored.
  useEffect(() => {
    if (initialConsent.hasSavedConsent) return undefined;

    let displayTimer;

    const showAfterPageLoad = () => {
      displayTimer = window.setTimeout(() => setShowBanner(true), 6000);
    };

    if (document.readyState === 'complete') {
      showAfterPageLoad();
    } else {
      window.addEventListener('load', showAfterPageLoad);
    }

    return () => {
      window.removeEventListener('load', showAfterPageLoad);
      window.clearTimeout(displayTimer);
    };
  }, [initialConsent.hasSavedConsent]);

  // Clear dismiss timer
  useEffect(() => {
    return () => window.clearTimeout(dismissTimer.current);
  }, []);

  // Preferences modal focus management
  useEffect(() => {
    if (!showPreferences) {
      manageButtonRef.current?.focus();
      return undefined;
    }

    preferencesDialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowPreferences(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = preferencesDialogRef.current?.querySelectorAll(
        'button:not([disabled])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === firstElement ||
          document.activeElement === preferencesDialogRef.current)
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPreferences]);

  // Allow the Cookie Policy page to reopen preferences
  useEffect(() => {
    const openPreferences = () => {
      setShowPreferences(true);
    };

    window.addEventListener('open-cookie-preferences', openPreferences);

    return () => {
      window.removeEventListener('open-cookie-preferences', openPreferences);
    };
  }, []);

  const dismissBanner = () => {
    if (isDismissing) return;

    setIsDismissing(true);

    dismissTimer.current = window.setTimeout(() => {
      setShowBanner(false);
    }, 280);
  };

  const handleAccept = () => {
    saveConsent(
      JSON.stringify({
        analytics: true,
        marketing: true,
      }),
    );

    setAnalytics(true);
    setMarketing(true);

    dismissBanner();
  };

  const handleDecline = () => {
    saveConsent(
      JSON.stringify({
        analytics: false,
        marketing: false,
      }),
    );

    setAnalytics(false);
    setMarketing(false);

    dismissBanner();
  };

  const handleSavePreferences = () => {
    saveConsent(
      JSON.stringify({
        analytics,
        marketing,
      }),
    );

    setShowPreferences(false);
    dismissBanner();
  };

  // Keep the component mounted when preferences are opened
  // from the Cookie Policy page.
  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div className={`cookie-banner${isDismissing ? ' is-dismissing' : ''}`}>
          <div className="cookie-content">
            <h3>We value your privacy</h3>

            <p>
              We use cookies and similar technologies to improve your
              experience, analyze website traffic, and support our marketing
              efforts.
            </p>

            <button
              ref={manageButtonRef}
              className="cookie-manage-button"
              type="button"
              onClick={() => setShowPreferences(true)}
              disabled={isDismissing}
            >
              Manage preferences
            </button>
          </div>

          <div className="cookie-actions">
            <button
              className="cookie-action-secondary"
              type="button"
              onClick={handleDecline}
              disabled={isDismissing}
            >
              Decline
            </button>

            <button
              className="cookie-action-primary"
              type="button"
              onClick={handleAccept}
              disabled={isDismissing}
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          className="cookie-preferences"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowPreferences(false);
            }
          }}
        >
          <div
            ref={preferencesDialogRef}
            className="cookie-preferences-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            tabIndex={-1}
          >
            <h3 id="cookie-preferences-title">Cookie Preferences</h3>

            <p>Choose which types of cookies you allow us to use.</p>

            <div className="cookie-option">
              <div>
                <h4>Essential Cookies</h4>

                <p>These cookies are necessary for the website to function.</p>
              </div>

              <span>Always Active</span>
            </div>

            <div className="cookie-option">
              <div>
                <h4>Analytics Cookies</h4>

                <p>Help us understand how visitors use our website.</p>
              </div>

              <button
                type="button"
                className={
                  analytics ? 'cookie-toggle is-enabled' : 'cookie-toggle'
                }
                aria-pressed={analytics}
                onClick={() => setAnalytics((enabled) => !enabled)}
              >
                {analytics ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="cookie-option">
              <div>
                <h4>Marketing Cookies</h4>

                <p>Used to support advertising and marketing activities.</p>
              </div>

              <button
                type="button"
                className={
                  marketing ? 'cookie-toggle is-enabled' : 'cookie-toggle'
                }
                aria-pressed={marketing}
                onClick={() => setMarketing((enabled) => !enabled)}
              >
                {marketing ? 'ON' : 'OFF'}
              </button>
            </div>

            <div className="cookie-preferences-actions">
              <button type="button" onClick={() => setShowPreferences(false)}>
                Cancel
              </button>

              <button type="button" onClick={handleSavePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
