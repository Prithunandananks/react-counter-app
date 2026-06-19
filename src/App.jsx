import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>

        <div className="count">{count}</div>

        <div className="buttons">
          <button className="increment-btn" onClick={increment}>
            +
          </button>

          <button className="decrement-btn" onClick={decrement}>
            -
          </button>

          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>

        {count > 10 ? (
          <p>Counter is greater than 10</p>
        ) : (
          <p>Counter is 10 or below</p>
        )}
      </div>
    </div>
  );
}

export default App;
