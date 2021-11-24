import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SingedOutLinks";

class Navbar extends React.Component {
  render() {
    const auth = this.props.auth;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return <div>{links}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
