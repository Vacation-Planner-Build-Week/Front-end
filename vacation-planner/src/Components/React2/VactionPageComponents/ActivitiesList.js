import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";
import { Activities } from "./Activities";

//main body
export const ActivitiesList = props => {
  //declareing state
  const [acts, setActs] = useState([]);
  const [addAct, setAddAct] = useState(false);
  const [actToAdd, setActToAdd] = useState({
    activity_description: "",
    time_start: "",
    time_end: "",
    vacation_id: props.id
  });

  //get activities
  useEffect(() => {
    axiosWithAuth()
      .get(`vacations/${props.id}/activities`)
      .then(res => {
        console.log("USEEFT", res);
        setActs([...res.data]);
      })
      .catch(err => console.log(err));
  }, [addAct]);

  //handle changes in add form
  const handleChange = e => {
    setActToAdd({ ...actToAdd, [e.target.name]: e.target.value });
  };

  //handle submitting of form
  const handleSubmit = e => {
    e.preventDefault();
    if (addAct) {
      axiosWithAuth()
        .post(`/activities`, actToAdd)
        .then(res => {
          console.log("ADDED ACT:", res);
          setAddAct(!addAct);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      {!acts ? (
        <h1>Add activities</h1>
      ) : (
        acts.map(ele => <Activities act={ele} />)
      )}
      {addAct ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Activity name"
            value={actToAdd.activity_description}
            name="activity_description"
            onChange={handleChange}
          />
          <input
            type="time"
            placeholder="Activity Start time"
            value={actToAdd.time_start}
            name="time_start"
            onChange={handleChange}
          />
          <input
            type="time"
            placeholder="Activity End time"
            value={actToAdd.time_end}
            name="time_end"
            onChange={handleChange}
          />
          <button type="submit">add Activity</button>
        </form>
      ) : (
        <>
          <button onClick={() => setAddAct(!addAct)}>Add activity</button>
          <button>remove Activity</button>
        </>
      )}
    </div>
  );
};
