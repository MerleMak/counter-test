export default function App() {
  return (
    <div>
      <h1>Counter Exercise</h1>
      <p>
        The <code>&lt;Counter&gt;</code> below is not working yet.
      </p>
      <p>Can you make the number go up on every click?</p>
      <p>
        <span role="img" aria-label="Hint">
          💡
        </span>
        &nbsp;Hint: you'll need to import something from React.
      </p>
      <p>
        <strong>
          <span role="img" aria-label="Bonus">
            💯
          </span>
          &nbsp;Bonus
        </strong>
        : can you make two separate counters, one starting from 0 and another
        from 5?
      </p>
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <div class="counter">
      Current Value:<span>0</span>
      <button>Increment</button>
    </div>
  );
}
