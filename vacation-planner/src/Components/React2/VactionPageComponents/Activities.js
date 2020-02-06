import React from "react";

export const Activities = props => {
  return (
    <div className="Act-Card">
      <h3>Description: {props.act.activity_description}</h3>
      <h5>timeStart: {props.act.time_start}</h5>
      <h5>timeEnd: {props.act.time_end}</h5>
      <button onClick={() => props.delete(props.act.activity_id)}>X</button>
      <button onClick={() => props.edit(props.act)}>Edit</button>
    </div>
  );
};
