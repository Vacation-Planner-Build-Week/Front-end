import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
import { useDispatch, useSelector } from "react-redux";

const UpdateVacation = props => {

  const [vacation, setVacation] = useState({
    vacation_name: "",
    vacation_description: ""
  });

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    const vacationToEdit = props.vacation.find(
            e => `${e.id}` === props.match.params.id
        )
        console.log(props.vacation, vacationToEdit)
        if(vacationToEdit) {
            setVacation(vacationToEdit)
        }
    }, [props.vacation, props.match.params.id])

  const handleChanges = e => {
    let value = e.target.value;
    setVacation({
      ...vacation,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .put(`/vacations/${props.vacation.id}`)
        .then(response => {
            console.log(response);
            dispatch({ type: "EDIT_Vacation", payload: response.data });
            props.history.push("/dashboard");
        })
        .catch(error => {
            console.log("Data was not returned updateVacation.js", error);
            props.history.push("/dashboard/");
        });
  };

  return (
    <div>
      <h1>Edit Vacation</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateVacation;