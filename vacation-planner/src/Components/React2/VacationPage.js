import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
//components
import { ActivitiesList } from "./VactionPageComponents/ActivitiesList";
import { CommentsList } from "./CommentsPageComponenets/CommentsList";

export const VacationPage = props => {
  const [vacation, setVacation] = useState({
    vacation_id: props.match.params.id,
    vacation_name: "",
    vacation_description: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/vacations/${props.match.params.id}`)
      .then(res => {
        console.log("VacationPage:", res);
        setVacation(res.data.vacation);
      })
      .catch(err => console.log(err.response));
  }, [props.match.params.id]);

  const clickHandle = name => {
    var act = document.getElementById("acts");
    var coms = document.getElementById("coms");
    var peeps = document.getElementById("peeps");
    switch (name) {
      case "comments":
        coms.classList.remove("hide");
        act.classList.add("hide");
        peeps.classList.add("hide");
        break;
      case "people":
        coms.classList.add("hide");
        act.classList.add("hide");
        peeps.classList.remove("hide");
        break;
      case "activities":
        coms.classList.add("hide");
        act.classList.remove("hide");
        peeps.classList.add("hide");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>name: {vacation.vacation_name}</h1>
      <h3>description: {vacation.vacation_description}</h3>
      <div>
        <h3 onClick={() => clickHandle("comments")}>comments</h3>
        <h3 onClick={() => clickHandle("people")}>people: {}</h3>
        <h3 onClick={() => clickHandle("activities")}>activities: </h3>
      </div>
      <div id="acts">
        <ActivitiesList id={props.match.params.id} />
      </div>
      <div id="coms" className="hide">
        <CommentsList id={props.match.params.id} />
      </div>
      <div id="peeps" className="hide">
        <h1>People</h1>
      </div>
    </div>
  );
};
