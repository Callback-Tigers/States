import React, {useState} from "react";


const Form1 = () => {

    const [name, setName] = useState("")
    // const [upperCaseName, setUpperCaseName] = useState("")
    const [btnClicked, setBtnClicked] = useState(false)


   
    function makeItCapital(){
        //   setUpperCaseName(name.toUpperCase())
        setBtnClicked(true)
    }


    return(
        <div>
              <input type="text" placeholder="Enter your name"
              onChange={e => setName(e.target.value)} 
              /> 
              
              <button onClick={makeItCapital}> Convert to UpperCase</button>

              {/* <p>Your Name is: {upperCaseName} </p> */}
              <p> Your Name is:
              {
                btnClicked==true && (
                     name.toUpperCase()
                )
              }
              </p>

        </div>
    )
}

export default Form1;