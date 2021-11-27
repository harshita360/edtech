import React from "react";
//mport { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { connect } from "react-redux";
import avatar from "../avatar.png";
import moment from "moment";

class DoubtPortal extends React.Component {
  state = {
    qrcodes: null,
  };
  componentDidMount() {
    this.fetchQrcodes();
  }

  fetchQrcodes = () => {
    const firestore = getFirestore();

    firestore
      .collection("classnotes")
      .get()
      .then((snapshot) => {
        const d = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          d.push(data);
        });
        this.setState({ qrcodes: d });
        console.log(this.state.qrcodes);
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(list);
  };

  renderQrCodes = () => {
    return this.state.qrcodes.map((elem) => {
      console.log(elem);
      return (
        <div
          className="ui raised card"
          key={elem.teacher_email}
          style={{ height: "12%", width: "25%" }}
        >
          <div className="content" style={{ color: "black" }}>
            <i
              className="big user circle icon"
              style={{ color: "#6c63ff" }}
            ></i>
            <br />
            <b>{elem.teacher_email}</b>
            <div class="metadata" style={{ color: "black" }}>
              <span class="date">
                {moment(elem.createdAt.toDate()).calendar()}
              </span>
            </div>
          </div>

          <div className="image">
            <img src={elem.qrUrl} alt="img" />
          </div>
          <div className="content">
            <div className="header">{elem.subject}</div>
            <div className="meta">
              <h6>
                <span className="date">
                  <b> Module:{elem.module}</b>
                </span>
              </h6>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.qrcodes);
    return (
      <div className="ui container" style={{ marginTop: "2%", color: "white" }}>
        <br />
        <br />
        <a href="/">
          <button
            className="ui big right floated button"
            style={{ backgroundColor: "#6c63ff", color: "white" }}
          >
            {" "}
            Back To DashBoard
          </button>
        </a>
        <div className="ui three stackable cards">
          {this.state.qrcodes ? this.renderQrCodes() : null}
        </div>
        <br />
        <br />

        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(DoubtPortal);
