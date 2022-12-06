import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {
  const [delta, setDelta] = useState(1)
  const [maxNum, setMaxNum] = useState(100)
  const [reset, setReset] = useState(false)
  const [maxValue, changeMaxValue] = useState(0)

  function handleDelta(e){
    setDelta(Number(e.target.value))
  }
  function handleMaximum(e){
    console.log(e);
    setMaxNum(Number(e.target.value))
  }

  function getReset(data){
    console.log(data)
    setReset(data)
  }

  function setMaxValue(counterValue){
    if (counterValue > maxValue) changeMaxValue(counterValue)
  }

  return (
    <div className="App">
      <h1>Hello to advanced internet technologies class</h1>
      <p></p>
      <h3>Maximum counters value {maxValue}</h3>
      <h5>Delta counter:</h5>
      <input type = "number" value = {delta} onChange = {handleDelta} />
      <p></p>
      <h5>Maximum counter number:</h5>
      <input type = "number" value = {maxNum} onChange = {handleMaximum} />
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} setMaxValue = {setMaxValue}/>
      <Counter delta = {delta} maxNum = {maxNum} getReset = {getReset} needToReset = {reset} setMaxValue = {setMaxValue}/>
    </div>
  );
}

export default App;
