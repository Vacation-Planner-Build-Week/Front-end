import React, { useState } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";

export const AMesssage = props => {
  const [name, setName] = useState("");
  console.log("PROPS_IN_A_MSG", props.item);
  //   var person = props.allPeeps.find(ele => ele.user_id === props.item.sender_id);
  //   console.log("PERSON_IN_AMESG", person);

  //   if (person.user_id === Number(localStorage.getItem("userid"))) {
  //     setName("you");
  //   } else {
  //     setName(person.user_name);
  //   }

  axiosWithAuth()
    .get(`users/sender/${props.item.sender_id}`)
    .then(res => {
      console.log("RES_IN_A_MSG", res);
      if (res.data.user_id === Number(localStorage.getItem("userid"))) {
        setName("you");
      } else {
        setName(res.data.user_name);
      }
    })
    .catch(err => console.log(err));
  return (
    <div>
      <p>
        {`[ ${name} ] : ${props.item.message} `}
        <button className = "smallButton"
          onClick={() => {
            props.delete();
          }}
        >
          X
        </button>
      </p>
    </div>
  );
};
