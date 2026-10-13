import '../styles/SelectionStateIcon.css';

const SelectionStateIcon = ({ active }) => (
  <svg
    key={active ? 'active' : 'inactive'}
    className="selection-state-icon"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {active ? (
      <path d="M7 7l10 10M17 7 7 17" />
    ) : (
      <>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </>
    )}
  </svg>
);

export default SelectionStateIcon;
