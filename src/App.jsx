import "./App.css";
import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const addNum = () => {
    setCount(count + 1);
  };

  const subtractNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    // console.log(count)
  };

  return (
    <>
      <div className="App" id="app-div">
        <h1>Tasbeeh count: {count}</h1>
        <button id="add" onClick={addNum}>Add</button>
        <button id="subtract" onClick={subtractNum}>Subtract</button>
      </div>
    </>
  );
}

export default App;