import React from "react";
import signup2 from "../signup2.svg";
import { signUp } from "../actions/authActions";
import { connect } from "react-redux";
//import history from "../history";
import { Redirect } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleSignUp = (e) => {
    e.preventDefault();
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Please enter all credentials");
    } else {
      this.props.signUp(this.state);
    }
  };
  render() {
    //  console.log(this.props.auth);
    const authError = this.props.authError;
    const auth = this.props.auth;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className="ui container"
        style={{
          margin: "2%",
        }}
      >
        <div className="ui stackable grid">
          <div className="ui six wide column">
            <center>
              <i
                className="huge user circle icon"
                style={{ color: "#6C63FF" }}
              ></i>
            </center>
            <br />
            <br />
            <form className="ui inverted form">
              <div className="field">
                <div className="two fields">
                  <div className="field">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="shipping[first-name]"
                      placeholder="First Name"
                      onChange={(e) =>
                        this.setState({ firstname: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="shipping[last-name]"
                      placeholder="Last Name"
                      onChange={(e) =>
                        this.setState({ lastname: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Email ID</label>
                  <input
                    type="text"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="field">
                  <label>Password</label>

                  <input
                    type="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </div>
                <br />
                <center>
                  <button
                    className="ui right labeled icon large button"
                    onClick={this.handleSignUp}
                    style={{ backgroundColor: "#3F3D56", color: "white" }}
                  >
                    <i className="right arrow icon"></i>
                    SignUp
                  </button>
                </center>
                <br />
                <div style={{ color: "yellow" }}>
                  {authError ? (
                    <p style={{ color: "white" }}>{authError}</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
          <div className="ui eight wide centered column">
            <br />
            <br />
            <br />
            <center>
              <img
                src={signup2}
                alt="img"
                style={{ width: "85%", height: "85%" }}
              />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
