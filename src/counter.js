import { useState } from "react";

function Counter(props) {
    const {delta} = props
    const [count, setCount] = useState(1)
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