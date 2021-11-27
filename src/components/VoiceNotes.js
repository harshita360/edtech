import React from "react";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import notes1 from "../notes1.svg";
import "./css/Notes.css";
//import { Redirect } from "react-router-dom";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function VoiceNotes(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);
  //const [content, setContent] = useState("");

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("stopped mic on click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote("->" + transcript + "\n");
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  const jsPdfGenerate = () => {
    // var doc = new jsPDF("p", "pt");
    // const s = "hello there";
    // doc.text(20, 30, s);
    // doc.save("notes.pdf");
    // var i = 1;
    // var str = "";
    // savedNotes.map((s) => {
    //   setContent(...content, s + "\n");
    //   console.log(s);
    // });
    // //console.log(str);
    var doc = new jsPDF("p", "pt");
    // const s = "hello there";
    doc.text(20, 30, savedNotes, { maxWidth: 400 });
    doc.save("notes.pdf");

    //console.log(savedNotes);
  };

  const auth = props.auth;
  console.log(auth.uid);
  //if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "110vh" }}>
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="ten wide column">
            <h1
              style={{
                fontWeight: "800",

                fontSize: "60px",
              }}
            >
              <br />
              Collect Your <br />
              <center>Thoughts ...</center>
              <br />
            </h1>
            <br />
          </div>
          <div className="six wide  column">
            <img
              src={notes1}
              style={{ height: "80%", width: "80%" }}
              alt="img"
            />
          </div>
        </div>
        <div className="ui stackable grid">
          <div className="six wide column">
            {isListening ? (
              <span>
                <i
                  class=" large microphone icon"
                  style={{ color: "white" }}
                ></i>
              </span>
            ) : (
              <span>
                🛑️
                <i
                  className=" large microphone icon"
                  style={{ color: "white" }}
                ></i>
              </span>
            )}
            <div className="ui buttons">
              <button
                style={{ textColor: "white" }}
                className="ui large white button"
                onClick={handleSaveNote}
                disabled={!note}
              >
                Save Note
              </button>
              <div className="or"></div>
              <button
                className="ui large button"
                onClick={() => setIsListening((prevState) => !prevState)}
                style={{ backgroundColor: "#6C63FF" }}
              >
                Start/Stop
              </button>
            </div>
            <br />
            <br />
            <p style={{ color: "white" }}>{note}</p>
          </div>

          <div
            className="ten wide column"
            style={{
              border: "2px solid #2F2E41",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <h2>
              <i className="large edit icon"></i>
            </h2>

            {savedNotes.map((n) => (
              <p key={n}>{n}</p>
            ))}
            <br />
            <br />

            <button
              className="ui right floated button"
              onClick={jsPdfGenerate}
              style={{ backgroundColor: "#2F2E41", color: "white" }}
            >
              Generate PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(VoiceNotes);
