import React from "react";
import signup2 from "../signup2.svg";
import { signUp } from "../actions/authActions";
import { connect } from "react-redux";

class SignUp extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    //  console.log(this.props.auth);
    const authError = this.props.authError;
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
              <i class="huge user circle icon" style={{ color: "#6C63FF" }}></i>
            </center>
            <br />
            <br />
            <form className="ui inverted form">
              <div class="field">
                <div class="two fields">
                  <div class="field">
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
                  <div class="field">
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
                <div class="field">
                  <label>Email ID</label>
                  <input
                    type="text"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div class="field">
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
                    class="ui right labeled icon large button"
                    onClick={this.handleSignUp}
                    style={{ backgroundColor: "#3F3D56", color: "white" }}
                  >
                    <i class="right arrow icon"></i>
                    SignUp
                  </button>
                </center>
                <div style={{ color: "white" }}>
                  {authError ? <p>{authError}</p> : null}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
