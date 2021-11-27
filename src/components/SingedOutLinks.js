import React from "react";
//import { connect } from "react-redux";

class SingedOutLinks extends React.Component {
  render() {
    return (
      <div className="ui inverted stackable large menu">
        <div className="item">
          <a class="item" href="/">
            <i className="big book icon" style={{ color: "white" }}></i>
          </a>
        </div>
        <a href="/login" className="item">
          Teachers
        </a>
        <a href="/login" className="item">
          Students
        </a>

        <div className="right menu">
          <a href="/signup" className="item">
            Sign Up
          </a>
          <a href="/login" className="item">
            Sign In
          </a>
        </div>
      </div>
    );
  }
}
export default SingedOutLinks;
