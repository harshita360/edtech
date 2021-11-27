import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFireStore, getFirestore } from "redux-firestore";

import { getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";

import firebase from "firebase/compat/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import { isLoaded } from "react-redux-firebase";
import { useSelector } from "react-redux";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div> Loading...</div>;
  return children;
}

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);
// const rrfProps = {
//   firebase,
//   config: firebaseConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// };
// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
//   //updateProfileOnLogin: false,
// };
const rrfConfig = {
  userProfile: "users", // where profiles are stored in database
  useFirestoreForProfile: true, // use Firestore for profile instead of RTDB
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root")
);

reportWebVitals();
