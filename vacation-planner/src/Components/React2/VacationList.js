import React from "react";
import VacationCard from '../React2/Vacations';
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log("State",state);
        return {
            vacation: state.vacation
        }
}

const VacationList = props => {
    console.log(props.vacation);
    return(
        <div>
            {props.vacation.map(vacation => (
                <VacationCard key={vacation.id} vacation={vacation} />
            ))}
        </div>
    )
}

export default connect (mapStateToProps)(VacationList)