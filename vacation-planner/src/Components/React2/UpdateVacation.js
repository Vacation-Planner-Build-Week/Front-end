// import React, { useState, useEffect } from 'react';
// import {axiosWithAuth} from '../utils/axiosWithAuth'

// const initialVacation = {
//     vacation_name: "",
//     vacation_description: ""
// }

// const UpdateVacation = props => {
//     const [ vacation, setVacation ] = useState(initialVacation)
//     console.log(workout)

//     useEffect(() => {
//         const vacationToEdit = props.vacation.find(
//             e => `${e.id}` === props.match.params.id
//         )
//         console.log(props.vacations, vacationToEdit)
//         if(vacationToEdit) {
//             setVacation(vacationToEdit)
//         }
//     }, [props.vacations, props.match.params.id])

//     const handleChanges = e => {
//         let value = e.target.value
//         setVacation({
//             ...vacation,
//             [e.target.name]: value
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         console.log("this is what we are sending to the vacation put", vacation)
//         console.log(vacation.id)
//         let tempID = props.userid
//         axiosWithAuth()
//             .put(`/users/${workout.id}/entry`, workout)
//             .then(response => {
//                 console.log("this is the response", response.data)
//                 props.setUserid(0)
//                 props.setUserid(tempID)
//                 props.history.push(`/dashboard`)  
//             })
//             .catch(error => console.log('Data not returned(handleSubmit) UpdateWorkout.js', error))
//     }

//     return (
//         <div className="update-container">
//             <h1>Edit Workout</h1>
//             <div className="update-form-container">
//             <form className="update-form" onSubmit={handleSubmit}>
//                 <input 
//                     placeholder="Vacation Name" 
//                     type="text"
//                     name="vacation_name" 
//                     value={vacation.vacation_name}
//                     onChange={handleChanges}
//                 />
//                 <input 
//                     placeholder="" 
//                     type="text" 
//                     name="vacation_description"
//                     value={vacation.vacation_description}
//                     onChange={handleChanges}
//                 />
//                 <button>Submit</button>
//             </form>
//             </div>
//         </div>
//     )
// }

// export default UpdateVacation;

// import React, { useState } from "react";
// import { axiosWithAuth } from "../Utilities/AxiosWithAuth";
// import { useDispatch, useSelector } from "react-redux";

// const AddVacation = props => {

//   const [vacation, setVacation] = useState({
//     vacation_name: "",
//     vacation_description: ""
//   });

//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user);

//   const handleChanges = e => {
//     let value = e.target.value;
//     setVacation({
//       ...vacation,
//       [e.target.name]: value
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post(`/vacations`, vacation)
//       .then(response => {
//         console.log(response);
//         dispatch({ type: "ADD_Vacation", payload: vacation });
//         props.history.push("/dashboard/");
//         axiosWithAuth()
//           .get(`users/${user.user_Id}/vacations`)
//           .then(response => {
//             console.log(response)
//           })
//           .catch(error => console.log(error));
//       })
//       .catch(error => {
//         console.log("Data was not returned addVacation.js", error);
//         props.history.push("/dashboard/");
//       });
//   };

//   return (
//     <div>
//       <h1>Edit Vacation</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="vacation_name"
//           type="text"
//           value={vacation.vacation_name}
//           onChange={handleChanges}
//           required
//         />
//         <input
//           name="vacation_description"
//           type="textarea"
//           value={vacation.vacation_description}
//           onChange={handleChanges}
//           required
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddVacation;