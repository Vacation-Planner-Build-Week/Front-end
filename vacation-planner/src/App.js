
// Dependencies
import React, { useEffect } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { axiosWithAuth } from "./Components/Utilities/AxiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";


// Components
import LogIn from "./Components/React1/LogIn";
import Register from "./Components/React1/Register";
import PrivateRoute from "./Components/Utilities/PrivateRoute";
import AddVacation from "./Components/React2/AddVacation";
import Dashboard from "./Components/React1/Dashboard";
import UpdateWorkout from "./Components/React2/UpdateVacation";

function App() {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.isLogged);

  const signOut = () => {
    dispatch({ type: "LOGOUT_USER" });
  };
  
      // <Route path = '/Comments'>
      //   <CommentForm />
      // </Route>
  return (
    <div className="App">
      <h1>Vacation Planner</h1>
      <nav className="nav">
        <div className="nav-links">
          {!localStorage.getItem("token") && <Link to="/">Sign In</Link>}
          {!localStorage.getItem("token") && <Link to="/signup/">Sign Up</Link>}
          {localStorage.getItem("token") && (
            <Link to="/dashboard/">Dashboard</Link>
          )}
          {localStorage.getItem("token") && (
            <Link to="/addvacation/">Add Vacation</Link>
          )}
          {localStorage.getItem("token") && (
            <Link to="/" onClick={signOut}>
              Sign Out
            </Link>
          )}
        </div>
      </nav>
      <Switch>
        <Route exact path="/" render={props => <LogIn {...props} />} />
        <Route path="/signup" render={props => <Register {...props} />} />
        <Route
          path="/addvacation/"
          component={props => <AddVacation {...props} />}
        />
        {/* <Route
          path="/updatevacation"
          component={props => <UpdateVacation {...props} />}
        /> */}
        <PrivateRoute
          path="/dashboard/"
          component={props => <Dashboard {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App;
