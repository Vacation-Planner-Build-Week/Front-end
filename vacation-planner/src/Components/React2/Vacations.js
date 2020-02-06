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
    console.log("this is props vacations", props.vacations);
    props.history.push(`/updatevacation/${props.vacations.vacation_id}`);
  };
  return (
    <div className="vacationCard">
      <h2>{props.vacations.vacation_name}</h2>
      <p>{props.vacations.vacation_description}</p>
      <button className="btn" onClick={handleEdit}>
        Edit
      </button>
      <button className="btn" onClick={handleRemove}>
        Delete
      </button>
    </div>
  );
};
export default VacationCard;
