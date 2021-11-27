import React from "react";
import { connect } from "react-redux";
import "./css/DashBoard.css";
import home1 from "../home1.svg";
import { Link } from "react-router-dom";

class DashBoard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div style={{ color: "white" }}>
        <div className="pusher">
          <div
            className="ui inverted vertical masthead center aligned segment"
            style={{ backgroundColor: "#6C63FF" }}
          >
            >
            <div className="ui text container">
              <h1
                className="ui inverted header"
                style={{
                  fontWeight: "800",

                  fontSize: "70px",
                }}
              >
                Ed-Surge
              </h1>
              <h3>A place where learning becomes easy...</h3>
              <br />
              <h2>One Platform, Many Solutions</h2>
              <div>
                {this.props.auth.uid ? null : (
                  <Link
                    to="/login"
                    className="ui huge primary button"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    {" "}
                    Get Started <i className="right arrow icon"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header" style={{ color: "#6C63FF" }}>
                    We Help You Personalize Your Learning
                  </h3>
                  <p>
                    EdSurge knows what it takes to support your classes every
                    day and to give you your time back.One Platform with Many
                    Solutions
                  </p>
                  <h3 className="ui header" style={{ color: "#6C63FF" }}>
                    We Make Communication Easy
                  </h3>
                  <p>
                    We’re constantly improving our integrations to ensure a
                    smooth and seamless workflow for all.
                  </p>
                </div>
                <div className="six wide right floated column">
                  <img
                    src={home1}
                    className="ui large bordered rounded image"
                    alt="img"
                  />
                </div>
              </div>
              <div className="row">
                <div className="center aligned column">
                  <div
                    className="ui huge button"
                    style={{ backgroundColor: "#6C63FF", color: "white" }}
                  >
                    Check Them Out
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div className="center aligned row">
                <div className="column">
                  <h3>"Amazing Platform"</h3>
                  <p>That is what they all say about us</p>
                </div>
                <div className="column">
                  <h3>"Focus on learning wins.One Platform Many Solutions"</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui text container">
              <h3 className="ui header" style={{ color: "white" }}>
                Breaking The Grid, Grabs Your Attention
              </h3>
              <p style={{ color: "#6C63FF" }}>
                Built by educators, EdSurge knows what it takes to support your
                classes every day and to give you your time back.Make learning
                fun. Enjoy discussions and learn together.
              </p>
              <div
                className="ui big button"
                style={{ backgroundColor: "white", color: "black" }}
              >
                Read More
              </div>
            </div>
          </div>

          <div className="ui inverted vertical footer segment">
            <div className="ui container">
              <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                  <h4 className="ui inverted header">About</h4>
                  <div className="ui inverted link list">
                    <div class="item">Education</div>
                    <div class="item">Teachnology</div>
                    <div class="item"></div>
                    <div class="item">Diversity</div>
                  </div>
                </div>
                <div className="three wide column">
                  <h4 className="ui inverted header">Services</h4>
                  <div className="ui inverted link list">
                    <div className="item">Resources</div>
                    <div className="item">FAQ</div>
                    <div className="item">How To Access</div>
                    <div href="/#" className="item">
                      Doubts
                    </div>
                  </div>
                </div>
                <div className="seven wide column">
                  <h4 className="ui inverted header">Footer Header</h4>
                  <p>Focus on learning wins</p>
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps)(DashBoard);
