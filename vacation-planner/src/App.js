
// Dependencies
import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { axiosWithAuth } from "./Components/Utilities/AxiosWithAuth";
import "./App.css";


// Components
import LogIn from "./Components/React1/LogIn";
// import Register from "./Components/React1/Register";
import PrivateRoute from "./Components/Utilities/PrivateRoute";
import AddVacation from "./Components/React2/AddVacation";
import Dashboard from "./Components/React1/Dashboard";

function App() {
  const [userid, setUserid] = useState(0);
  const [userdata, setUserdata] = useState([]);
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    setUserid(localStorage.getItem("userid"));
    if (localStorage.getItem("token")) {
      axiosWithAuth()
      .get(`/users/${userid}/vacations`)
      .then(response => {
        console.log("Vacation Data: ", response.data)
        setVacations(response.data);
      })
      .catch(error => console.log(error));

      axiosWithAuth()
        .get(`/users/${userid}/`)
        .then(response => {
          console.log("Users Data: ", response.data);
          setUserdata(response.data);
        })
        .catch(error => console.log(error));
    }
  }, [userid]);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setUserid(0);
  };


      <Route path = '/Comments'>
        <CommentForm />
      </Route>

  

  if(!userdata) return null
  else if(userdata){


    return (
      <div className="App">
        <h1>Vacation Planner</h1>
        <nav className="nav">
          <div className="nav-links">
            {!localStorage.getItem("token") && (
              <Link to="/login/">Sign In</Link>
            )}
            {!localStorage.getItem("token") && (
              <Link to="/signup/">Sign Up</Link>
            )}
            {localStorage.getItem("token") && (
              <Link to="/dashboard/">Dashboard</Link>
            )}
            {localStorage.getItem("token") && (
              <Link to="/addvacation/">Add Vacation</Link>
            )}
            {localStorage.getItem("token") && (
              <Link to="/login/" onClick={signOut}>
                Sign Out
              </Link>
            )}
          </div>
        </nav>
        <Route
          exact
          path="/"
          render={props => <LogIn {...props} setUserid={setUserid} />}
        />
        <Route
          path="/login/"
          render={props => <LogIn {...props} setUserid={setUserid} />}
        />
        {/* <Route 
          path="/signup/"
          render={props => 
            <Register {...props} />
          } 
        /> */}
        <Route
          path="/addvacation/"
          component={props => (
            <AddVacation
              {...props}
              userid={userid}
              setUserid={setUserid}
              setVacations={setVacations}
            />
          )}
        />
        <PrivateRoute
          path="/dashboard/"
          component={props => (
            <Dashboard
              {...props}
              userid={userid}
              setUserid={setUserid}
              setVacations={setVacations}
              vacations={vacations}
              userdata={userdata}
              setUserdata={setUserdata}
            />
          )}
        />
      </div>
    );
  }

}

export default App;
