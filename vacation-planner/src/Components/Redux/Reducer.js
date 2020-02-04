export const InitState = {
  isLogged: false,
  user: {
    user_Id: null,
    user_Name: null
  },
  vacations: [{ vacation_name: "New", vacation_description: "Just basic" }]
};

export const Reducer = (state = InitState, action) => {
  switch (action.type) {
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      return state;

    case "LOGIN_USER":
      console.log("USER_LOGIN", action.payload);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLogged: true,
        user: {
          user_Id: action.payload.user_id,
          user_Name: action.payload.user_name
        }
      };

    case "ADD_VACATION":
      return {
        ...state,
        vacations: [...state.vacations, action.payload]
      };

    default:
      return state;
  }
};
