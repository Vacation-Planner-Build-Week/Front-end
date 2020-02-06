import React, { useState } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { useDispatch } from "react-redux";

const Register = props => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    user_name: "",
    user_password: ""
  });

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    console.log("Submitting", user);
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://vacation-planner-2020.herokuapp.com/api/auth/register",
        user
      )
      .then(response => {
        console.log("Success", response);
        dispatch({ type: "REGISTER_USER", payload: response.data });
        props.history.push("/dashboard");
      })
      .catch(error => console.log("ERROR", error.response));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          id="username"
          type="text"
          name="user_name"
          onChange={handleChanges}
          placeholder="userName"
          value={user.user_name}
          required
        />
        <input
          className="input"
          id="password"
          type="password"
          name="user_password"
          onChange={handleChanges}
          placeholder="password"
          value={user.user_password}
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
