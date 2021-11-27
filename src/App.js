import React from "react";
import Login from "./components/Login";
import { Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import VoiceNotes from "./components/VoiceNotes";
import Navbar from "./components/Navbar";
import TeacherQrGenerate from "./components/TeacherQrGenerate";
import SignUp from "./components/SignUp";
import DoubtPortal from "./components/DoubtPortal";
import StudentScanNotes from "./components/StudentScanNotes";
import history from "./history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <Router history={history}>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/notes" component={VoiceNotes} />
            <Route exact path="/teacher/qr" component={TeacherQrGenerate} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/doubt" component={DoubtPortal} />
            <Route exact path="/student/qr" component={StudentScanNotes} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
