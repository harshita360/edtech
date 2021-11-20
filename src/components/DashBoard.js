import React from "react";
import { connect } from "react-redux";

class DashBoard extends React.Component {
  render() {
    console.log(this.props);
    return <div>This is Dashboard</div>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//   };
// };
export default DashBoard;
