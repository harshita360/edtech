// const initState = {
//   //  credentials: { email: "xyz", password: "123" },
//   credentials: {},
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
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      //console.log("default");
      //console.log(state);
      return state;
  }
};
export default authReducer;

//const initState = {};
// const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "LOGIN_ERROR":
//       console.log("login error", action.err);
//       return { ...state, authError: "login failed" };
//     //return state;
//
//     case "LOGIN_SUCCESS":
//       console.log("login success");
//       return {
//         authError: "login success",
//       };
//
//     default:
//       return state;
//   }
// };
//export default authReducer;
