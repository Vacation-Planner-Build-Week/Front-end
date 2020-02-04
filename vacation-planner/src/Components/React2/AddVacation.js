import React, { useState } from "react";
import { axiosWithAuth } from "../Utilities/AxiosWithAuth";

const AddVacation = (props) => {
    const [ vacation, setVacation ] = useState({
        vacation_name: "",
        vacation_description: ""
    });

    const handleChanges = e => {
        let value = e.target.value;
        setVacation({
            ...vacation,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(vacation)
        console.log(props.userid)
        axiosWithAuth()
        .post(`/users/${props.userid}/vacations`, vacation)
        .then(response => {
            console.log(response)
            props.history.push("/dashboard/");
            axiosWithAuth()
            .get(`users/${props.userid}/vacations`)
            .then(response => {
                console.log(response)
                props.setVacation(response.data)
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log("Data was not returned addVacation.js", error)
            props.history.push("/dashboard/")
        })
        props.setUserid(props.userid)

        setVacation({
            ...vacation,
            vacation_name: "",
            vacation_description: ""
        });
    };

    return (
        <div>
            <h1>Add Vacation</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="vacation_name"
                    type="text"
                    value={vacation.vacation_name}
                    onChange={handleChanges}
                    required
                />
                <textarea
                    name="vacation_description"
                    type="text"
                    value={vacation.vacation_description}
                    onChange={handleChanges}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddVacation;