import React from "react";
//import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { connect } from "react-redux";
import doubt1 from "../doubt2.svg";
import moment from "moment";

class DoubtPortal extends React.Component {
  state = {
    doubt: "",
    doubtlist: null,
    reply: "",
    currdoc: null,
  };

  componentDidMount() {
    this.fetchBlogs();
  }

  fetchBlogs = () => {
    const firestore = getFirestore();

    firestore
      .collection("doubts")
      .get()
      .then((snapshot) => {
        const d = [];
        snapshot.forEach((doc) => {
          console.log(doc.id);
          const data = doc.data();
          data.id = doc.id;
          d.push(data);
        });
        this.setState({ doubtlist: d });
        console.log(this.state.doubtlist);
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry! Something went wrong! Try Again");
      });

    //console.log(list);
  };

  postDoubt = () => {
    if (this.state.doubt === "") alert("You Have to Enter your Doubt");
    else {
      //  const firebase = getFirebase();
      const firestore = getFirestore();
      firestore
        .collection("doubts")
        .add({
          person: this.props.auth.email,
          doubt: this.state.doubt,
          createdAt: new Date(),
          firstname: this.props.profile.firstname,
          lastname: this.props.profile.lastname,
        })
        .then(() => {
          console.log("added doubt");
          alert("Your Query was added!");
          this.setState({ doubt: "" });
          window.location.reload();
        })
        .catch((err) => {
          console.log("error in adding doubt");
          alert("Something went wrong!, try again!");
        });
      // console.log(this.state);
      // console.log(this.props.auth.email);
    }
  };

  replyToDoubt = (doubtid, e) => {
    //e.preventDefault();
    if (this.state.reply === "") alert("you have to enter a reply");
    else {
      //const firebase = getFirebase();
      const firestore = getFirestore();
      firestore
        .collection("doubts")
        .doc(doubtid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          console.log(data);
          var arr = [];
          if (data.replies) {
            arr = data.replies;
            arr.push(this.state.reply);
          } else {
            arr.push(this.state.reply);
          }
          console.log(arr);
          return firestore
            .collection("doubts")
            .doc(doubtid)
            .update({
              replies: arr,
            })
            .then(() => {
              alert("Yay your reply was added");
              this.setState({ reply: "" });
              window.location.reload();
            });
        })
        .catch((err) => {
          console.log("err in fetching ", err);
          alert("Sorry something went wrong!, please try again");
        });
      //console.log(doubtid);
    }
  };

  renderPosts = () => {
    return this.state.doubtlist.map((elem) => {
      //console.log(elem);
      return (
        <div className="comment" key={elem.doubt}>
          <div className="avatar">
            <i
              className="big user circle icon"
              style={{ color: "#6c63ff" }}
            ></i>
          </div>
          <div className="content">
            <div className="author" style={{ color: "white" }}>
              <h5>
                <u>
                  {" "}
                  {elem.firstname}&nbsp;{elem.lastname}
                </u>
                &nbsp;&nbsp;&nbsp; &nbsp;
                {moment(elem.createdAt.toDate()).calendar()}
              </h5>
            </div>
            <div className="metadata">
              <div className="date">2 days ago</div>
            </div>
            <div className="text" style={{ color: "white" }}>
              <h5>{elem.doubt}</h5>
            </div>
            <div className="actions">
              <div className="reply active">
                <h5 style={{ color: "#6c63ff" }}>Replies</h5>
              </div>
              <br />
            </div>
            <div>
              {elem.replies
                ? elem.replies.map((reply) => (
                    <div key={reply} className="panel-list">
                      <h6>
                        <i
                          className="large user circle icon"
                          style={{ color: "white" }}
                        ></i>
                        {reply}
                      </h6>
                    </div>
                  ))
                : null}
            </div>
            <div className="ui reply form">
              <div className="field">
                <textarea
                  onChange={(e) => this.setState({ reply: e.target.value })}
                  style={{
                    height: "20px",
                    backgroundColor: "black",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "10px",
                  }}
                ></textarea>
              </div>
              <button
                className="ui large button"
                style={{ backgroundColor: "#6c63ff", color: "white" }}
                onClick={() => this.replyToDoubt(elem.id)}
              >
                {" "}
                Add Reply
              </button>
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    });
  };

  render() {
    //  console.log(this.state.doubtlist);
    return (
      <div className="ui container" style={{ marginTop: "2%", color: "white" }}>
        <br />
        <center>
          <h1
            style={{
              fontWeight: "800",

              fontSize: "60px",
            }}
          >
            DOUBTNUT
          </h1>
        </center>
        <br />

        <div className="ui grid">
          <div className="ten wide column" style={{ color: "white" }}>
            <div className="ui input">
              <input
                style={{ margin: "1%" }}
                className="ui fluid big input"
                type="text"
                placeholder="POST YOUR DOUBT"
                onChange={(e) => this.setState({ doubt: e.target.value })}
              />
              <button
                className="ui button"
                onClick={this.postDoubt}
                style={{ backgroundColor: "#6c63ff" }}
              >
                POST
              </button>
            </div>

            <div className="ui tiny comments">
              {this.state.doubtlist ? this.renderPosts() : null}
            </div>
          </div>
          <div className="six wide column">
            <br />
            <center>
              <button
                className="ui big button"
                style={{ backgroundColor: "#444184" }}
              >
                <a href="/" style={{ color: "white" }}>
                  Back to DashBoard
                </a>{" "}
              </button>
            </center>
            <img
              src={doubt1}
              alt="img"
              style={{ height: "95%", width: "90%" }}
            />
          </div>
        </div>
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
