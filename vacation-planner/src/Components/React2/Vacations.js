import React from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { Redirect } from "react-router-dom";

const VacationCard = props => {
  console.log("Props", props);

  const handleRemove = () => {
    axiosWithAuth()
      .delete(`vacations/${props.vacations.vacation_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

//   const handleEdit = () => {
//     e.preventDefault();
//     console.log(e.target.id)
//     if(e.target.getAttribute('name') === "exercisedata"){
//       props.history.push(`/updatevacation/${e.target.id}`);
//     }
//     else return
//   }

  const handleClick = name => {
    alert(`you clicked on ${name}`);
  };
  return (
    <div>
      <h1>{props.vacations.vacation_name}</h1>
      <h2>{props.vacations.vacation_descrition}</h2>
      <button className="btn">Edit</button>
      <button className="btn" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};

export default VacationCard;
