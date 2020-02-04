export const InitState = {
  user: {
    user_Id: 0,
    user_Name: ""
  },
  vacations: [{ vacation_name: "New", vacation_description: "Just basic" }]
};

export const Reducer = (state = InitState, action) => {
  switch (action.type) {
    case "ADD_VACATION":
      return {
        ...state,
        vacations: [...state.vacations, action.payload]
      };
    default:
      return state;
  }
};
