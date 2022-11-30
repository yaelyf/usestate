import { useState, useEffect} from "react";

function Counter(props) {
    const {delta, maxNum, getReset, needToReset} = props
    const [count, setCount] = useState(1)

    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getReset(false)
        }
    }, [needToReset, getReset])

    function incr (){
        setCount(
            function(oldCount){
                if (oldCount + delta > maxNum) return 0
                return oldCount + delta
            }
        )
    }
    function reset (){
        getReset(true)
        //setCount(0)
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