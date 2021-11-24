import React from "react";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { connect } from "react-redux";
import avatar from "../avatar.png";

class DoubtPortal extends React.Component {
  state = {
    qrcodes: null,
  };

  fetchQrcodes = () => {
    const firestore = getFirestore();
    var list = [];
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
          style={{ height: "20%", width: "25%" }}
        >
          <div class="content">
            <div class="right floated meta">14h</div>
            <img class="ui avatar image" src={avatar} /> {elem.teacher_email}
          </div>
          <div className="image">
            <img src={elem.qrUrl} alt="img" />
          </div>
          <div class="content">
            <a class="header">{elem.subject}</a>
            <div class="meta">
              <span class="date">{elem.module}</span>
            </div>
            <div class="description">{elem.createdAt.seconds}</div>
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
        <div className="ui three stackable cards">
          {this.state.qrcodes ? this.renderQrCodes() : null}
        </div>
        <br />
        <br />
        <button className="ui button" onClick={this.fetchQrcodes}>
          {" "}
          GET QR
        </button>
        <br />
        <br />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(DoubtPortal);
