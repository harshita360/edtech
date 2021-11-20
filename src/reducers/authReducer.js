// const initState = {
//   credentials: { email: "xyz", password: "123" },
// };
const initState = { authError: null };
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login success");
      return { ...state, authError: "login failed" };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    default:
      console.log("default");
      console.log(state);
      return state;
  }
};
export default authReducer;
