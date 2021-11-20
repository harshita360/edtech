import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div class="ui inverted stackable menu">
        <div class="item">
          <img src="/images/logo.png" alt="img" />
        </div>
        <a class="item">Teachers</a>
        <a class="item">Students</a>
        <a class="item">Help</a>
        <div class="right menu">
          <a class="item">Sign Up</a>
          <a class="item">Sign In</a>
        </div>
      </div>
    );
  }
}
export default Navbar;
