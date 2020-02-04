import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import LogIn from './Components/React1/LogIn'
import Dashboard from './Components/React1/Dashboard'
import CommentForm from './Components/React1/CommentForm'

function App() {
  return (
    <div className="App">
      <h1>Vacation Planner</h1>
      
      <Route path = '/'>
       <Dashboard />
      </Route>

      <Route path = '/LogIn'>
        <LogIn />
      </Route>

      <Route path = '/Comments'>
        <CommentForm />
      </Route>

    </div>
  );
}

export default App;
