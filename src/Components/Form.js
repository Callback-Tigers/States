import React, {useState} from "react";


const Form = () => {

    const [name, setName] = useState("")


    function updateName(event){
        console.log(event.target.value)
        setName(event.target.value)

    }



    return(
        <div>
              <input type="text" placeholder="Enter your name"
              onChange={updateName} 
              /> 
              <p>Your Name is: {name} </p>

        </div>
    )
}

export default Form;