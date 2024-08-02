import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 10;

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter >= 20) return;
    setCounter(++counter);
  };

  const removeValue = () => {
    if (counter <= -10) return;
    setCounter(--counter);
  };

  return (
    <>
      <h1>Welcome on React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
