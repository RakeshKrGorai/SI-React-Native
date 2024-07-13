import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Number of clicks until timer expires</h1>
      <div className="card">
        <button className="count-show">{count}</button>
        <br />
        <div>
          <span>Time Left : </span>
        </div>
        <button
          className="count-increment"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
      </div>
      <footer>
        Designed by <span>Rakesh</span>
      </footer>
    </>
  );
}

export default App;
