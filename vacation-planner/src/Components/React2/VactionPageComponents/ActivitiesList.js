import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";
import { Activities } from "./Activities";

//inital state
const initstate = {
  activity_description: "",
  time_start: "",
  time_end: "",
  vacation_id: 0
};

//main body
export const ActivitiesList = props => {
  //declareing state
  const [acts, setActs] = useState([]);
  const [addAct, setAddAct] = useState(false);
  const [update, setUpdate] = useState(false);
  const [actToAdd, setActToAdd] = useState(initstate);

  //get activities
  useEffect(() => {
    axiosWithAuth()
      .get(`vacations/${props.id}/activities`)
      .then(res => {
        console.log("USEEFT", res);
        setActs([...res.data]);
      })
      .catch(err => console.log(err));
  }, [update]);

  //handle changes in add form
  const handleChange = e => {
    setActToAdd({ ...actToAdd, [e.target.name]: e.target.value });
  };
  //handle Deleteing
  const handleDelete = id => {
    axiosWithAuth()
      .delete(`activities/${id}`)
      .then(res => {
        console.log("ADDED ACT:", res);
        setUpdate(!update);
      })
      .catch(err => console.log(err));
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
          setUpdate(!update);
          setActToAdd(initstate);
        })
        .catch(err => console.log(err));
    }
  };

  //handle Editing
  const handleEdit = item => {
    setAddAct(!addAct);
    setActToAdd(item);
    handleDelete(item.activity_id);
  };

  //small clear function
  const clear = () => {
    setAddAct(!addAct);
    setActToAdd(initstate);
  };
  return (
    <div>
      {/* add activ form   */}
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
          <button onClick={() => setAddAct(!addAct)}>Cancel</button>
        </form>
      ) : (
        <>
          <button onClick={clear}>Add activity</button>
        </>
      )}
      {/* show the activs or add act */}
      {!acts ? (
        <h1>Add activities</h1>
      ) : (
        acts.map((ele, index) => (
          <Activities
            key={index}
            edit={handleEdit}
            delete={handleDelete}
            act={ele}
          />
        ))
      )}
    </div>
  );
};
