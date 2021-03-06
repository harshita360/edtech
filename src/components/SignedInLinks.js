import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

class SignedInLinks extends React.Component {
  render() {
    //console.log(this.props);
    return (
      <div className="ui inverted stackable large menu">
        <div className="item">
          <a className="item" href="/">
            <i className="big book icon" style={{ color: "white" }}></i>
          </a>
        </div>

        <a href="/teacher/qr" className="item">
          Upload Notes
        </a>

        <div className="right menu">
          <a onClick={this.props.signOut} class="item" href="/">
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

export default connect(null, mapDispatchToProps)(SignedInLinks);
