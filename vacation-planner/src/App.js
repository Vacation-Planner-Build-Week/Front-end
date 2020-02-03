import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import LogIn from './Components/React1/LogIn'
import Dashboard from './Components/React1/Dashboard'

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner</h1>
      <Dashboard />

      <Route path = '/LogIn'>
        <LogIn />
      </Route>

    </div>
  );
}

export default App;
