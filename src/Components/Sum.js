import React,{useState} from "react"; 

console.log("I am outside the Component 1")
let a = 10 



const Sum = () => {
   const [count, setCount] = useState(10) // 11

   // let and const doubt
   

   console.log("I am inside the Component 1")
   function increaseCount(){
       setCount(count+1)
    }

    // let a = 10 
    console.log("Value of a", a)
    function increaseA(){
        a = a+1
        console.log("Value of a", a)
    }

    console.log("I am inside the Component 2")
    return(
        <div>
            <h1>Value of count is {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>

            <h1>Value of a is {a}</h1>
            <button onClick={increaseA}>Increase A</button>
        </div>
    )
}






export default Sum;




// c = 100 
// // c = c+1  
// c = 200