import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";
import { Person } from "./Person";
import { useSelector } from "react-redux";

export const PeopleList = props => {
  const [searchFor, setSearchFor] = useState({ name: "" });
  const [allUsers, setAllUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    console.log("ALL USERS:", allUsers);

    axiosWithAuth()
      .get(`/vacations/${props.id}/users`)
      .then(res => {
        console.log("GET_VACA_USERS", res);
        setPeopleList([...peopleList, ...res.data]);
      })
      .catch(err => console.log(err));
  }, [update]);

  useEffect(() => {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        // console.log("ALL_USERS", res);
        setAllUsers([res.data.users]);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setSearchFor({ ...searchFor, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("ALL PEEPS", allUsers);
    var exists = allUsers.filter(ele => ele.user_name === searchFor.name);
    var alreadyAdded = peopleList.filter(ele => ele.user_id === exists.user_id);
    // console.log("EXISTS", exists[0].user_name);

    if (exists.length >= 1) {
      if (alreadyAdded) {
        return alert("already added");
      }
      var toAdd = { user_id: exists[0].user_id, vacation_id: props.id };
      axiosWithAuth()
        .post(`/vacations/adduser`, toAdd)
        .then(res => {
          console.log("ADDED_USER?", res);
          setUpdate(!update);
        })
        .catch(err => console.log(err));
    } else {
      alert("no user found");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Search for useer to add"
            value={searchFor.name}
            name="name"
          />
          <button type="submit">Add</button>
        </form>
      </div>
      {!peopleList ? (
        <h3>Add some friends</h3>
      ) : (
        peopleList.map(ele => <Person key={ele.user_id} id={ele.user_id} />)
      )}
    </div>
  );
};
