import React, { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
    console.log('Incrementan num...');
  };

  const reiniciarNum = () => {
    setNumClicks(0);
    console.log('Reiniciar num...');
  };

  return (
    <div className="App">
      <h1>Contador de Clics: {numClicks}</h1>
      <Button text="Clic" onClick={incrementNum} isClick={true} />
      <Button text="Reiniciar" onClick={reiniciarNum} isClick={false} />
    </div>
  );
}

export default App;
