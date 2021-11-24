import React from "react";
import { connect } from "react-redux";

class SingedOutLinks extends React.Component {
  render() {
    return (
      <div class="ui inverted stackable large menu">
        <div class="item">
          <i class="big book icon" style={{ color: "white" }}></i>
        </div>
        <a href="/login" class="item">
          Teachers
        </a>
        <a href="/login" class="item">
          Students
        </a>
        <a href="/#" class="item">
          Help
        </a>
        <div class="right menu">
          <a href="/#" class="item">
            Sign Up
          </a>
          <a href="/login" class="item">
            Sign In
          </a>
        </div>
      </div>
    );
  }
}
export default SingedOutLinks;
