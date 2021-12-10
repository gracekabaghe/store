import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment }  from './actions';
import { decrement }  from './actions';
import './index.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button className="increment-btn" onClick={() => dispatch(increment())}>+</button>
      <button className="increment-btn" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
