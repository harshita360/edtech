import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";

class SignedInLinks extends React.Component {
  render() {
    return (
      <div class="ui inverted stackable large menu">
        <div class="item">
          <a class="item">
            <i class="big book icon" style={{ color: "white" }}></i>
          </a>
        </div>
        <a href="/teacher/qr" class="item">
          Teachers
        </a>
        <a href="/notes" class="item">
          Students
        </a>
        <a href="/#" class="item">
          Help
        </a>
        <div class="right menu">
          <a onClick={this.props.signOut} class="item">
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
