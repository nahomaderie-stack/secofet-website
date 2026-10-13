import { useContext, useLayoutEffect, useRef } from 'react';
import InitialRevealContext from './InitialRevealContext';
import { prepareSplitTextReveal } from './observeSplitTextReveal';
import './HomeTextReveal.css';

function SplitTextPage({ children }) {
  const contentRef = useRef(null);
  const revealControllerRef = useRef(null);
  const isRevealEnabled = useContext(InitialRevealContext);

  useLayoutEffect(() => {
    revealControllerRef.current = prepareSplitTextReveal(contentRef.current);

    return () => revealControllerRef.current?.cleanup();
  }, []);

  useLayoutEffect(() => {
    if (!isRevealEnabled) return undefined;

    return revealControllerRef.current?.activate();
  }, [isRevealEnabled]);

  return (
    <div ref={contentRef} className="split-text-page-content">
      {children}
    </div>
  );
}

export default SplitTextPage;
