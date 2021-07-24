import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/index";
import { Meeting } from "./components/Meeting/index";
import { MeetingUpdate } from "./components/Meeting/MeetingUpdate";
import { Login } from "./components/Login/index";
import { Home } from "./components/Home";

import "./styles.css";
import { ProtectedRoute } from "./routes";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <ProtectedRoute
          loggedIn={loggedIn}
          component={Dashboard}
          path="/dashboard"
        /> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/dashboard" component={Dashboard} />
        <Route exact path="/home/meeting" component={Meeting} />
        <Route exact path="/home/meeting/:id" component={MeetingUpdate} />
      </Switch>
    </Router>
  );
}
