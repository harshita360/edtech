import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";
import login3 from "../login3.svg";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSignIn = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.signIn(this.state);
    //console.log(this.state);
  };
  render() {
    //console.log(this.props);
    const auth = this.props.auth;

    return (
      <div className="ui container" style={{ margin: "6%" }}>
        <div className="ui stackable grid">
          <div className="six wide column">
            <center>
              <i class="huge user circle icon" style={{ color: "white" }}></i>
            </center>
            <form className="ui inverted form">
              <div className="field">
                <br />
                <br />
                <br />
                <label>
                  <h5>Email</h5>
                </label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="field">
                <label>
                  <h5>Password</h5>
                </label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" className="hidden" />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>
              <button
                className="ui large secondary button"
                type="submit"
                style={{ backgroundColor: "#6C63FF" }}
                onClick={this.handleSignIn}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="ten wide column">
            <div className="ui six column centered grid">
              <img
                src={login3}
                alt="img"
                style={{
                  height: "85%",
                  width: "85%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
