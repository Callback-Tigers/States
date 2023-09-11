// import React, {useState} from "react";

// // use state => special function 

// console.log("I am outside the Component")

// let a = 10//11

// const StateBasics = () => {
//     const [count, setCount] = useState(0) // 1
//     console.log("I am inside the Component 1")

//     // let a = 10

//     function increase() {
//           a = a+1
//           console.log("Value of a",  a)
//     }
//     function increaseCount() {
//          setCount(count+1) // 1 , //  count = count+1 never ever do it 
//     }

//     console.log("I am inside the Component 2")
//     return (

//         <div>
//             <h1>Value of a is {a}</h1>
//             <button onClick={increase}>Increase</button>
//             <h1>Value of count is {count}</h1>
//             <button onClick={increaseCount}>Increase Count</button>
//         </div>
//     )

// }

// export default StateBasics;





// // let x = ++t 
// // t = t+1 && x = t

//  /*
//     // const [count, setCount] = useState(0)

//     // let x = useState("apple") // [apple", f]
//     let [count, setCount] = useState("apple")

//     // console.log("Value of x", x)
//     // console.log("Value of x[0]", x[0])
//     // console.log("Value of x[1]", x[1])

//     // kite => setKite 
//     // helloWorld => setHelloWorld
//     */