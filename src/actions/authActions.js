export const signIn = (credentials) => {
  //const firebase = useFirebase();
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS", credentials });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
    //dispatch({ type: "LOGIN_SUCCESS" });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        const role_arr = newUser.email.split("@");
        const role = role_arr[1];
        var x = false;
        if (role === "teacher.com") {
          x = true;
        }

        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            initials: newUser.firstname[0] + newUser.lastname[0],
            isAdmin: x,
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
