export const createQr = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const eid = getState().firebase.auth.email;
    firestore
      .collection("classnotes")
      .add({
        teacher_email: eid,
        subject: data.subject,
        module: data.module,
        qrUrl: data.imgUrl,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_QR", data });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_QR_ERROR", err });
      });
  };
};
