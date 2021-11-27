import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

class SignedInStudentLinks extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui inverted stackable large menu">
        <div className="item">
          <a className="item" href="/">
            <i className="big book icon" style={{ color: "white" }}></i>
          </a>
        </div>

        <a href="/notes" className="item">
          Record and Save
        </a>
        <a href="/student/qr" className="item">
          Scan Notes
        </a>
        <a href="/doubt" className="item">
          DoubtNut
        </a>
        <div className="right menu">
          <a onClick={this.props.signOut} className="item" href="/">
            Sign Out
          </a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInStudentLinks);
