import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";

export const Activities = props => {
  //   const [activity, setAcitivity] = useState();
  //get act by id
  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get(`activities/${props.id}`)
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => console.log(err));
  //   }, []);
  //popuplate data's
  return (
    <div>
      <h3>Description: {props.act.activity_description}</h3>
      <h5>timeStart: {props.act.time_start}</h5>
      <h5>timeEnd: {props.act.time_end}</h5>
    </div>
  );
};
