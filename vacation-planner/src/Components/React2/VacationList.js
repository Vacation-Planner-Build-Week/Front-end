import React from "react";
import VacationCard from "../React2/Vacations";
import { useSelector } from "react-redux";

export const VacationList = (props) => {
  const vacations = useSelector(state => state.vacations);
  return (
    <div>
      {vacations.map((ele, index) => (
        <div>
          <VacationCard {...props} key={index} vacations={ele} />
        </div>
      ))}
    </div>
  );
};
