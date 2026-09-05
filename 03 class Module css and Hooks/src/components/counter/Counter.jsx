import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-section">
      <div className="counter-card">
        <div className="counter-header">
          <h2 className="counter-title">Counter</h2>
        </div>

        <div className="odometer-container">
          <div className="digit-column">
            <div className="digit-track">
              <span>{count}</span>
            </div>
          </div>
        </div>

        <div className="counter-controls">
          <button
            className="btn btn-decrement"
            aria-label="Decrease"
            onClick={() => {
              if (count <= 0) return;
              setCount(count - 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          <button
            className="btn btn-reset"
            aria-label="Reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className="btn btn-increment"
            aria-label="Increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
