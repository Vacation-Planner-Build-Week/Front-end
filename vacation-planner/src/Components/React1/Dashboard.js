import React from 'react';
import {Link} from 'react-router-dom';


const Dashboard = () => {


    return(

        <div className ="navlink">
            <Link to = "/">Dashboard</Link> 
           <Link to = "/login">Login</Link> 
           <Link to ="/comments">Comments</Link>
        </div>
    )
}

export default Dashboard;