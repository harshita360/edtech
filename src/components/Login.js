import React from "react";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";
import login3 from "../login3.svg";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSignIn = () => {
    //e.preventDefault();
    //console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    //console.log(this.props);
    return (
      <div className="ui container" style={{ margin: "8%" }}>
        <div className="ui grid">
          <div className="six wide column">
            <center>
              <i class="huge user circle icon" style={{ color: "#3F3D56" }}></i>
            </center>
            <form className="ui form">
              <div className="field">
                <br />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Password</label>
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
                className="ui secondary button"
                type="submit"
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
                style={{ height: "80%", width: "80%" }}
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
