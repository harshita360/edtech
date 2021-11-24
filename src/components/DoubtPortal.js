import React from "react";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { connect } from "react-redux";
import doubt1 from "../doubt2.svg";
import avatar from "../avatar.png";

class DoubtPortal extends React.Component {
  state = {
    doubt: "",
    doubtlist: null,
  };

  fetchBlogs = () => {
    const firestore = getFirestore();
    var list = [];
    firestore
      .collection("doubts")
      .get()
      .then((snapshot) => {
        const d = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          d.push(data);
        });
        this.setState({ doubtlist: d });
        console.log(this.state.doubtlist);
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(list);
  };
  // const response=db.collection('doubts');
  // const data=await response.get();
  // console.log(data);
  // // data.docs.forEach(item=>{
  // //  setBlogs([...blogs,item.data()])
  // // })

  postDoubt = () => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection("doubts")
      .add({
        person: this.props.auth.email,
        doubt: this.state.doubt,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("added doubt");
      })
      .catch((err) => {
        console.log("error in adding doubt");
      });
    // console.log(this.state);
    // console.log(this.props.auth.email);
  };

  renderPosts = () => {
    return this.state.doubtlist.map((elem) => {
      console.log(elem);
      return (
        <div class="comment">
          <a class="avatar">
            <img src={avatar} />
          </a>
          <div class="content">
            <a class="author" style={{ color: "white" }}>
              {elem.person}
            </a>
            <div class="metadata">
              <div class="date">2 days ago</div>
            </div>
            <div class="text" style={{ color: "white" }}>
              <h5>{elem.doubt}</h5>
            </div>
            <div class="actions">
              <a class="reply active">Reply</a>
            </div>
            <form class="ui reply form">
              <div class="field">
                <textarea style={{ height: "20px" }}></textarea>
              </div>
              <div class="ui primary submit labeled icon button">
                <i class="icon edit"></i> Add Reply
              </div>
            </form>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.doubtlist);
    return (
      <div className="ui container" style={{ marginTop: "2%", color: "white" }}>
        <br />
        <h1
          style={{
            fontWeight: "800",

            fontSize: "60px",
          }}
        >
          DOUBTNUT
        </h1>
        <br />
        <div className="ui grid">
          <div className="ten wide column" style={{ color: "white" }}>
            <div className="ui tiny comments">
              {this.state.doubtlist ? this.renderPosts() : null}
            </div>
          </div>
          <div className="six wide column">
            <img
              src={doubt1}
              alt="img"
              style={{ height: "95%", width: "90%" }}
            />
          </div>
        </div>
        <br />
        <br />
        <button className="ui button" onClick={this.fetchBlogs}>
          {" "}
          GET DOUBTS
        </button>
        <br />
        <br />
        <div class="ui input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => this.setState({ doubt: e.target.value })}
          />
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

export default connect(mapStateToProps)(DoubtPortal);
