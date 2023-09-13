import React,{useState} from "react";


const FormValidation = () => {
    // let [name, setName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmPassword, setConfirmPassword] = useState("")

    let [user, setUser] = useState({name:"", email:"", password:"", confirmPassword:""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    let {name, email, password, confirmPassword} = user

    // console.log(user)


   function implementSignup(event){
              event.preventDefault()
              // validation:
              if(!name || !email || !password || !confirmPassword){
                    //  alert("Please fill all the details")
                     setError("Please fill all the details")
                    setSuccess("")
                    return
                     
              }
            //   else if()  // fnsfsfkj@gmail.com
              else if(password !== confirmPassword){
                    // alert("Password and Confirm Password should be same")
                    setError("Password and Confirm Password should be same")
                    setSuccess("")
                    return
              }


                // success:
                // alert("Form Submitted Successfully")
              setSuccess("Form Submitted Successfully")
              setError("")

   }


 return(
    <div>   

            {error &&   <h3 style={{color:"red"}}> {error} </h3> }
            {success && <h3 style={{color:"green"}}> {success} </h3> }



           <form className="signup-form" onSubmit={implementSignup}>
                <input type="text" placeholder="Enter your name" 
                 onChange={e=> setUser({...user, name: e.target.value})}
                />
                <input type="email" placeholder="Enter your email" 
                    onChange={e=> setUser({...user, email: e.target.value})}
                />
                <input type="password" placeholder="Enter your password" 
                    onChange={e=> setUser({...user, password: e.target.value})}
                />
                <input type="password" placeholder="Confirm your password" 
                  onChange={e=> setUser({...user, confirmPassword: e.target.value})}
                />
                <button type="submit">Submit</button>
           </form>
    </div>
 )

}

export default FormValidation;