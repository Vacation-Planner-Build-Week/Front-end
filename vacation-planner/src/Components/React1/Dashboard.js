import React from "react";
import { useSelector } from "react-redux";
import VacationList from ""

const Dashboard = () => {
  const vacations = useSelector(state => state.vacations);

  return (
    <div>
      {/* <Link to = "/login">Log In</Link>  */}
      <h1>Dashboard</h1>
      <h1>Vacations:</h1>
      <div>
        {!vacations ? (
          <div>nothing to show</div>
        ) : (
          vacations.map(ele => ele.vacation_name)
        )}
      </div>
    </div>
  );
};

    // return(

    //     <div className ="navlink">
    //         <Link to = "/">Dashboard</Link> 
    //        <Link to = "/login">Login</Link> 
    //        <Link to ="/comments">Comments</Link>
    //     </div>
    // )


export default Dashboard;
