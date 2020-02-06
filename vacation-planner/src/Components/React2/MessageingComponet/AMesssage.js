import React, { useState } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";

export const AMesssage = props => {
  const [name, setName] = useState("");
  axiosWithAuth()
    .get(`users/${props.item.sender_id}`)
    .then(res => {
      if (res.data.user.user_id === localStorage.getItem("userid")) {
        setName("you");
      } else {
        setName(res.data.user.user_name);
      }
    })
    .catch(err => console.log(err));
  return (
    <div>
      <h5>
        {`[ ${name} ] : ${props.item.message} `}
        <button
          onClick={() => {
            props.delete();
          }}
        >
          X
        </button>
      </h5>
    </div>
  );
};
