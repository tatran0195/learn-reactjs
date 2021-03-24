import React, { useState } from 'react';
import './App.scss'
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>React hooks - Memo</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Easy" />
    </div>
  );
}

export default App;