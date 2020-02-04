import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import LogIn from './Components/React1/LogIn';
import Dashboard from './Components/React1/Dashboard';
import NavBar from './Components/React1/NavBar';
import Register from './Components/React1/Register';
import Onboarding from './Components/React1/Onboarding';
import PrivateRoute from './Components/Utilities/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <h1>Vacation Planner</h1> */}
      <NavBar />
      
      <Switch>
      <PrivateRoute path="/protected" component={Dashboard}/>  
      {/* <Route path="/dashboard" component={Dashboard}/> */}
      <Route path="/login" component={LogIn}/>
      
      <Route path="/register" component={Register}/>
      <Route path="/" component={Onboarding}/>
        {/* <LogIn /> */}
      
      </Switch>

    </div>
  );
}

export default App;
