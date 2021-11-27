import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SingedOutLinks";
import SignedInStudentLinks from "./SignedInStudentLinks";

class Navbar extends React.Component {
  render() {
    console.log(this.props);
    const auth = this.props.auth;
    console.log(auth);
    var links = null;
    if (!auth.uid) {
      links = <SignedOutLinks />;
    } else {
      if (this.props.profile.isAdmin) {
        links = <SignedInLinks />;
      } else {
        links = <SignedInStudentLinks />;
      }
    }

    return <div>{links}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
