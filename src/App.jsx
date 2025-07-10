import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <p>{count}</p>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
      <Reset  setCount={setCount} />
    </>
  );
}

function Increase({ count, setCount }) {
  function increase() {
    setCount(count + 1);
  }
  return <button onClick={increase}>Increase</button>;
}

function Decrease({ count, setCount }) {
  function decrease() {
    setCount(count - 1);
  }
  return <button onClick={decrease}>Decrease</button>;
}

function Reset({setCount})
{ 
  function reset()
  {
    setCount(0);
  }
  return <button onClick={reset}>Reset</button>;
}
export default App;