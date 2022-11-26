import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    const [delta, setDelta] = useState(1)
    function incr (){
        setCount(
            function(oldCount){
                return oldCount + delta
            }
        )
        console.log(count)
    }
    function reset (){
        setCount(
            function(oldCount){
                return 1
            }
        )
    }
    function handleDelta(e){
        console.log(e);
        setDelta(Number(e.target.value))
    }
    return (
      <div className="App">
        <h2>Counter</h2>
        <h5>Delta number:</h5>
        <input type= "number" value = {delta} onChange = {handleDelta}/>
        <h5>Counter is at: {count}</h5>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Click to reset Counter</button>
      </div>
    );
  }
  
  export default Counter;