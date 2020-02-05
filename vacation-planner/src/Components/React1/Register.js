import React, {useState} from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Register = props => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({
        user_name:"",
        user_password: "",
    });

    const handleChanges = e =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submitting", user);
        axios
          .post("https://vacation-planner-2020.herokuapp.com/api/auth/register", user)
          .then(response => {
            console.log("success", response);
            dispatch({ type: "USER_REGISTER", payload: response.data });
            props.history.push("/dashboard");
        })
      .catch(error => console.log("ERROR", error.response));
      }

      return (
        <div>
          <h1>Sign Up</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="login">Username</label>
            <input
              class="input"
              id="username"
              type="text"
              name="user_name"
              onChange={handleChanges}
              placeholder="userName"
              value={user.user_name}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              class="input"
              id="password"
              type="password"
              name="user_password"
              onChange={handleChanges}
              placeholder="password"
              value={user.user_password}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Register;