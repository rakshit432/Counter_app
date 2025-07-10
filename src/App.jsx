import { useState, createContext, useContext } from 'react';
import './App.css';

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

function App() {
  return (
    <CounterProvider>
      <h1>Counter App</h1>
      <Display />
      <Increase />
      <Decrease />
      <Reset />
    </CounterProvider>
  );
}

function Display() {
  const { counter } = useContext(CounterContext);
  return <p>{counter}</p>;
}

function Increase() {
  const { counter, setCounter } = useContext(CounterContext);
  return <button onClick={() => setCounter(counter + 1)}>Increase</button>;
}

function Decrease() {
  const { counter, setCounter } = useContext(CounterContext);
  return <button onClick={() => setCounter(counter - 1)}>Decrease</button>;
}

function Reset() {
  const { setCounter } = useContext(CounterContext);
  return <button onClick={() => setCounter(0)}>Reset</button>;
}

export default App;
