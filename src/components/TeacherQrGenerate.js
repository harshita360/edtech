import React from "react";
import QRCode from "qrcode";
import { connect } from "react-redux";
import { createQr } from "../actions/teacherActions";
import qrImg from "../qrimg2.svg";
class TeacherQrGenerate extends React.Component {
  state = {
    input: "",
    imgUrl: "",
    subject: "",
    module: "",
  };
  // getQrcode = async () => {
  //   try {
  //     const response = await QRCode.toDataURL(this.state.input);
  //     console.log(response);
  //     this.setState({ imgUrl: response });
  //   } catch (error) {
  //     console.log("error occurred");
  //   }
  // };
  getQrcode = () => {
    QRCode.toDataURL(this.state.input)
      .then((response) => {
        console.log(response);
        this.setState({ imgUrl: response });
      })
      .catch((err) => {
        console.log("error occured");
      });
  };
  qrUpload = () => {
    console.log("file upload");
    this.props.createQr(this.state);
  };

  showUploadModal = () => {
    return (
      <div className="ui six column grid">
        <div className="ui inverted form">
          <div class="field">
            <br />
            <br />
            <label>
              <h5>Subject Name</h5>
            </label>
            <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
              onChange={(e) => this.setState({ subject: e.target.value })}
            />
          </div>
          <br />
          <div class="field">
            <label>
              <h5>Module No.</h5>
            </label>
            <input
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
              onChange={(e) => this.setState({ module: e.target.value })}
            />
          </div>
          <br />
          <a href={this.state.imgUrl}>
            <button
              class="ui large left attached button"
              style={{ backgroundColor: "#6C63FF", color: "white" }}
            >
              Download
            </button>
          </a>
          <button
            class="right attached ui large button"
            style={{ backgroundColor: "white" }}
            onClick={this.qrUpload}
          >
            Upload
          </button>
        </div>
      </div>
    );
  };

  render() {
    //console.log(this.state.imgUrl);
    return (
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="eight wide column">
            {" "}
            <br />
            <br />
            <div className="ui labeled input">
              <div
                className="ui label"
                style={{ backgroundColor: "#3F3D56", color: "white" }}
              >
                http://
              </div>
              <input
                className="ui large input"
                type="text"
                onChange={(e) => this.setState({ input: e.target.value })}
                placeholder="mysite.com"
              />
            </div>
            <br />
            <br />
            <button
              class="ui right labeled icon button"
              onClick={this.getQrcode}
              style={{
                backgroundColor: "#6C63FF",
                color: "white",
                margin: "1%",
              }}
            >
              <i class="right arrow icon"></i>
              GENERATE QR CODE
            </button>
            <br />
            <br />
            {this.state.imgUrl ? (
              <img src={this.state.imgUrl} alt="img" />
            ) : null}
            <br />
            <br />
            {this.state.imgUrl ? this.showUploadModal() : null}
          </div>
          <div className="eight wide column">
            <img
              src={qrImg}
              alt="img"
              style={{ width: "95%", height: "95%", margin: "8%" }}
            />
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
    createQr: (data) => dispatch(createQr(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherQrGenerate);
