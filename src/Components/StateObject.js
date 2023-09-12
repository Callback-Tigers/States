
import React,{useState} from "react";


const StateObject = () => {
    const [coins, setCoins] = useState({gold:0, silver:0, bronze:0})

    console.log("coins", coins)  // {gold:1, silver:0, bronze:0}

    function increaseGold(){
        // setCoins({gold: coins.gold+1, silver: coins.silver, bronze: coins.bronze}) 
        // {gold:1, silver:0, bronze:0}
        // let obj2 = structuredClone(coins)
        
        // let obj = {...coins}

        // console.log("obj2", obj2)
        setCoins({...coins, gold: coins.gold+1})
    }

    return(
        <div>
            <p>Gold : {coins.gold} | Silver : {coins.silver} | Bronze : {coins.bronze}</p>
            <button onClick={increaseGold}> Gold </button>
            <button onClick={()=>setCoins({...coins, silver: coins.silver+1})}> Silver </button>
            <button> Bronze </button>
        </div>
    )
}

export default StateObject;