import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button className="count">{count}</button>
        <br />
        <button
          className="increment"
          onClick={() => setCount((count) => count + 1)}
        >
          Increment
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          className="decrement"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
      </div>
      <footer>
        Designed by <span>Rakesh</span>
      </footer>
    </>
  );
}

export default App;
