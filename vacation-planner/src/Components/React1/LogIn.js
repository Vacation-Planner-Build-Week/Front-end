import React, {useState} from "react";


const LogIn = () => {

//set up the initial state
    const [user, setUser] = useState({
        login:"",
        password: ""
    })

//onChange handler
    const handleChanges = (e) =>{
    setUser({[e.target.name]:e.target.value})
    }

// submitForm
    const submitForm = (e) =>{
    e.preventDefault();
    setUser({login:"", password: ""})

    }

    return (
        <div>
            <form className = "form" onSubmit ={submitForm}>
                
                {/* <label htmlFor = "login">LogIn</label> */}
                <label htmlFor = "login"></label>
                <input class ="input"
                id = "login"
                type = "text"
                name ="login"
                onChange = {handleChanges}
                placeholder = "userName"
                value = {user.user_name}
                />


                {/* <label htmlFor = "password">Password</label>  */}
                <label htmlFor = "password"></label> 
                <input class ="input"
                id = "password"
                type ="password"
                name = "password"
                onChange = {handleChanges}
                placeholder = "password"
                value = {user.user_password} 
                />   
                <button type ="submit">Submit</button>
               
            </form>

        </div>
    )
}

export default LogIn;