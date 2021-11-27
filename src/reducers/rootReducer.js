import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
//import { qrReducer } from "./qrReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  //classnotes: qrReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
