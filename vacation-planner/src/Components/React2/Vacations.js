import React from "react";

const VacationCard = (props) => {
    console.log("Props", props);
    return (
        <div>
            <h1>{props.vacation.name}</h1>
            <h2>{props.vacation.date}</h2>
        </div>
            
    )
}

export default VacationCard;