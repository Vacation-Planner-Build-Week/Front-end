import React from "react";
import VacationCard from "../React2/Vacations";
import { useSelector } from "react-redux";

export const VacationList = () => {
  const vacations = useSelector(state => state.vacations);
  return (
    <div className ="vacationList">
      {vacations.map((ele, index) => (
        <div>
          <VacationCard key={index} vacations={ele} />
        </div>
      ))}
    </div>
  );
};
