import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import VoiceNotes from "./components/VoiceNotes";
import Navbar from "./components/Navbar";

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
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
