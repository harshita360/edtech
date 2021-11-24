import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import VoiceNotes from "./components/VoiceNotes";
import Navbar from "./components/Navbar";
import TeacherQrGenerate from "./components/TeacherQrGenerate";
import SignUp from "./components/SignUp";
import DoubtPortal from "./components/DoubtPortal";
import StudentScanNotes from "./components/StudentScanNotes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/notes" component={VoiceNotes} />
            <Route exact path="/teacher/qr" component={TeacherQrGenerate} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/doubt" component={DoubtPortal} />
            <Route exact path="/student/qr" component={StudentScanNotes} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
