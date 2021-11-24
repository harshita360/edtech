const initState = {};

const qrReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_QR":
      console.log("create qr success");
      return state;
    case "CREATE_QR_ERROR":
      console.log("create qr error");
      return state;
    default:
      return state;
  }
};
