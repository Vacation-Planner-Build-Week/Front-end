// Dependencies
import React, { useEffect } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import "./App.css";
// Components
import LogIn from "./Components/React1/LogIn";
import Register from "./Components/React1/Register";
import PrivateRoute from "./Components/Utilities/PrivateRoute";
import AddVacation from "./Components/React2/AddVacation";
import UpdateVacation from "./Components/React2/UpdateVacation";
import Dashboard from "./Components/React1/Dashboard";
import CommentForm from "./Components/React1/CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "./Components/Utilities/AxiosWithAuth";

function App() {
  const dispatch = useDispatch();
  const logged = useSelector(state => state.isLogged);

  const signOut = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  // https://vacation-planner-2020.herokuapp.com/api/users/3

  return (
    <div className="App">
      <h1>Vacation Planner</h1>
      <nav className="nav">
        <div className="nav-links">
          {!localStorage.getItem("token") && <Link to="/">Sign In</Link>}
          {!localStorage.getItem("token") && <Link to="/signup">Sign Up</Link>}
          {localStorage.getItem("token") && (
            <Link to="/dashboard/">Dashboard</Link>
          )}
          {localStorage.getItem("token") && (
            <Link to="/addvacation">Add Vacation</Link>
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
          path="/addvacation"
          component={props => <AddVacation {...props} />}
        />
        <Route
          path="/updatevacation/:id"
          component={props => <UpdateVacation {...props} />}
        />
        <Route path="/Comments">
          <CommentForm />
        </Route>
        <PrivateRoute
          path="/dashboard"
          component={props => <Dashboard {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
