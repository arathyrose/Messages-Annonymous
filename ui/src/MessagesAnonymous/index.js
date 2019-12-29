import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./Screens/Splash";
import { AppBody } from "./styles";
import Login from "./Screens/Login";
import SubmittedMessages from "./Screens/SubmittedMessages";
import SubmitMessage from "./Screens/SubmitMessage";

function MessagesAnonymous() {
  return (
    <AppBody>
      <Router>
        <Switch>
          <Route path="/splash" component={Splash} />
          <Route path="/login" component={Login} />
          <Route path="/submitMessage" component={SubmitMessage} />
          <Route path="/submittedMessages" component={SubmittedMessages} />
          <Route
            path="/"
            component={(props) => {
              window.location.href = "splash"+props.location.search;
            }}
          />
        </Switch>
      </Router>
    </AppBody>
  );
}

export default MessagesAnonymous;
