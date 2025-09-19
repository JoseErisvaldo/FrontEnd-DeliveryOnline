import { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-amber-900">
        <h1>Vite + React</h1>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
