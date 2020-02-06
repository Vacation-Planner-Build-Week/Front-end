import React from "react";

export const Comments = props => {
  return (
    <div>
      <h3>username: {localStorage.getItem("username")} </h3>
      <h3>comment: {props.item.comment}</h3>
      <button>edit</button>
      <button>X</button>
    </div>
  );
};
