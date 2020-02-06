import React from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { Link } from "react-router-dom";

const VacationCard = props => {
  const handleRemove = () => {
    axiosWithAuth()
      .delete(`vacations/${props.vacations.vacation_id}`)
      .then(res => {
        console.log(res);
        props.update();
      })
      .catch(err => console.log(err));
  };
  
  const handleEdit = () => {
    console.log("this is props vacations", props.vacations);
    props.history.push(`/updatevacation/${props.vacations.vacation_id}`);
  };

  return (
//     <div className ="vacationCardParent">
//     <div className ="vacationCard"> 
//       <h2>{props.vacations.vacation_name}</h2>
//       <p>{props.vacations.vacation_description}</p>
//     <div>
      <Link to={`/vacationpage/${props.vacations.vacation_id}`}>
        <h1>{props.vacations.vacation_name}</h1>
      </Link>
      <h2>{props.vacations.vacation_description}</h2>
      <button className="btn" onClick={handleEdit}>
        Edit
      </button>
      <button className="btn" onClick={handleRemove}>
        Delete
      </button>
    </div></div>
  );
};
export default VacationCard;
