import React from "react";

export const Comments = props => {
  return (
    <div>
      <h3>
        {`[ ${localStorage.getItem("username")} ] : ${props.item.comment}`}
      </h3>
      <button onClick={() => props.edit(props.item)}>edit</button>
      <button onClick={() => props.delete(props.item.comment_id)}>X</button>
    </div>
  );
};
