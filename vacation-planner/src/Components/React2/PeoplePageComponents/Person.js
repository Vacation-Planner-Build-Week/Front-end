import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";

export const Person = props => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.id}`)
      .then(res => {
        console.log("USER_RES", res);
        setUser(res.data.user);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h3>{user.user_name}</h3>
      <button>X</button>
    </div>
  );
};
