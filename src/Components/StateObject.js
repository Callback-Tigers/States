
import React,{useState} from "react";


const StateObject = () => {
    const [coins, setCoins] = useState({gold:0, silver:0, bronze:0})

    console.log("coins", coins) 

    function increaseGold(){}

    return(
        <div>
            <p>Gold : {coins.gold} | Silver : {coins.silver} | Bronze : {coins.bronze}</p>
            <button onClick={increaseGold}> Gold </button>
            <button> Silver </button>
            <button> Bronze </button>
        </div>
    )
}

export default StateObject;