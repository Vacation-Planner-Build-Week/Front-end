import React from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";

const VacationCard = props => {

  const handleRemove = () => {
    axiosWithAuth()
      .delete(`vacations/${props.vacations.vacation_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

    const handleEdit = () => {
        console.log("this is props vacations", props.vacations)
        props.history.push(`/updatevacation/${props.vacations.vacation_id}`)
    }; 

  return (
    <div>
      <h1>{props.vacations.vacation_name}</h1>
      <h2>{props.vacations.vacation_descrition}</h2>
      <button className="btn" onClick={handleEdit}>Edit</button>
      <button className="btn" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
}

export default VacationCard;