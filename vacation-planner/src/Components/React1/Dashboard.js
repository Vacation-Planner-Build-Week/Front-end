import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const vacations = useSelector(state => state.vacations);

  return (
    <div>
      {/* <Link to = "/login">Log In</Link>  */}
      <h1>Dashboard</h1>
      <h1>Vacations:</h1>
      <div>{vacations.map(ele => ele.vacation_name)}</div>
    </div>
  );
};

export default Dashboard;
