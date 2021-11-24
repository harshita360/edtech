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
        <div class="pusher">
          <div
            class="ui inverted vertical masthead center aligned segment"
            style={{ backgroundColor: "#6C63FF" }}
          >
            >
            <div class="ui text container">
              <h1
                class="ui inverted header"
                style={{
                  fontWeight: "800",

                  fontSize: "70px",
                }}
              >
                Ed-Surge
              </h1>
              <h2>A place where learning becomes easy...</h2>
              <br />
              <div
                class="ui huge primary button"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <Link to="/login">
                  {" "}
                  Get Started <i class="right arrow icon"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="ui vertical stripe segment">
            <div class="ui middle aligned stackable grid container">
              <div class="row">
                <div class="eight wide column">
                  <h3 class="ui header" style={{ color: "#6C63FF" }}>
                    We Help You Personalize Your Learning
                  </h3>
                  <p>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs...through pure data analytics.
                  </p>
                  <h3 class="ui header" style={{ color: "#6C63FF" }}>
                    We Make Communication Easy
                  </h3>
                  <p>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p>
                </div>
                <div class="six wide right floated column">
                  <img
                    src={home1}
                    class="ui large bordered rounded image"
                    alt="img"
                  />
                </div>
              </div>
              <div class="row">
                <div class="center aligned column">
                  <a
                    href="/#"
                    class="ui huge button"
                    style={{ backgroundColor: "#6C63FF", color: "white" }}
                  >
                    Check Them Out
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="ui vertical stripe quote segment">
            <div class="ui equal width stackable internally celled grid">
              <div class="center aligned row">
                <div class="column">
                  <h3>"Amazing Platform"</h3>
                  <p>That is what they all say about us</p>
                </div>
                <div class="column">
                  <h3>"I shouldn't have gone with their competitor."</h3>
                  <p>
                    <img src="" class="ui avatar image" alt="img" /> <b>Nan</b>{" "}
                    Chief Fun Officer Acme Toys
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="ui vertical stripe segment">
            <div class="ui text container">
              <h3 class="ui header" style={{ color: "white" }}>
                Breaking The Grid, Grabs Your Attention
              </h3>
              <p style={{ color: "#6C63FF" }}>
                Instead of focusing on content creation and hard work, we have
                learned how to master the art of doing nothing by providing
                massive amounts of whitespace and generic content that can seem
                massive, monolithic and worth your attention.
              </p>
              <a
                href="/#"
                class="ui large button"
                style={{ backgroundColor: "white" }}
              >
                Read More
              </a>
              <h4 class="ui horizontal header divider"></h4>
            </div>
          </div>

          <div class="ui inverted vertical footer segment">
            <div class="ui container">
              <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                  <h4 class="ui inverted header">About</h4>
                  <div class="ui inverted link list">
                    <a href="/#" class="item">
                      Sitemap
                    </a>
                    <a href="/#" class="item">
                      Contact Us
                    </a>
                    <a href="/#" class="item">
                      Religious Ceremonies
                    </a>
                    <a href="/#" class="item">
                      Gazebo Plans
                    </a>
                  </div>
                </div>
                <div class="three wide column">
                  <h4 class="ui inverted header">Services</h4>
                  <div class="ui inverted link list">
                    <a href="/#" class="item">
                      Banana Pre-Order
                    </a>
                    <a href="/#" class="item">
                      DNA FAQ
                    </a>
                    <a href="/#" class="item">
                      How To Access
                    </a>
                    <a href="/#" class="item">
                      Favorite X-Men
                    </a>
                  </div>
                </div>
                <div class="seven wide column">
                  <h4 class="ui inverted header">Footer Header</h4>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//   };
// };
export default DashBoard;
