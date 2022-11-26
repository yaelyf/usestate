import { useState } from "react";

function Counter(props) {
    const {delta, maxNum} = props
    const [count, setCount] = useState(1)
    function incr (){
        setCount(
            function(oldCount){
                if (oldCount + props.delta < props.maxNum){
                   return oldCount + props.delta
                }
                return 1
            }
        )
    }
    function reset (){
        setCount(
            function(){
                return 1
            }
        )
    }
    return (
      <div className="App">
        <h2>Counter</h2>
        <h5>Counter is at: {count}</h5>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Click to reset Counter</button>
      </div>
    );
  }
  
  export default Counter;