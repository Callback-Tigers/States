import React, {useState} from "react";

let initialCount = 0
const Counter = () => {

    const [count, setCount] = useState(initialCount) 

    // console.log(count)

    // function increase(){
    //     setCount(count+1)
    // }
    


    return(
      <div>
            <h1>Counter App</h1> 
            <h1>Value of count is {count}</h1>

            {/* setCount(count+1)  */}

            <button onClick={()=>setCount(count+1)}>Increase</button>

            <button onClick={()=>setCount(count-1)} >Decrease</button>

            <button onClick={()=>setCount(initialCount)}>Reset</button>
      </div>
    )
}

export default Counter;