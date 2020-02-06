import React, { useState, useEffect } from "react";

export const Person = props => {
  return (
    <div>
      <h3>{props.item.user_name}</h3>
      <button onClick={() => props.delete(props.item.user_id)}>X</button>
    </div>
  );
};
