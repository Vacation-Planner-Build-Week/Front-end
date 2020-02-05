import React, { useState, useEffect } from "react";
// import Axios from "axios";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { useSelector } from "react-redux";

function UpdateVacation(props) {

  const [vacation, setVacation] = useState({

        id: props.match.params.id,
        isLogged: false,
        user: {
            user_Id: null,
            user_Name: null
        },
        vacations: []
    })

  useEffect(() => {
    console.log(props.match.params.id)
    axiosWithAuth()
    .get(`/vacations/${props.match.params.id}`)
      .then(res => {
        console.log("RESPONSE!!!!!", res)
        setVacation(res.data.vacation);
      })
      .catch(err => console.log(err.response));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Vacation:", vacation);
    axiosWithAuth()
    .put(`vacations/${props.match.params.id}`, vacation)
      .then(res => {
        console.log(res)
        props.history.push(`/dashboard`);
      })
      .catch(err => console.log(err));
  };

  const handleChanges = e => {
    setVacation({
            ...vacation,
            [e.target.name]: e.target.value 
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          name="vacation_name"
          type="text"
          value={vacation.vacation_name}
          onChange={handleChanges}
          required
        />
        <input
          name="vacation_description"
          type="textarea"
          value={vacation.vacation_description}
          onChange={handleChanges}
          required
        />
        <button type="submit">Done</button>
      </form>
    </div>
  );
}
export default UpdateVacation;