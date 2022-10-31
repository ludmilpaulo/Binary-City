import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import WelcomeScreen from "./screens/WelcomeScreen";
import ClientList from "./screens/ClientList";
import NewClient from "./screens/NewClient";
import ContactList from "./screens/ContactList";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/WelcomeScreen/" exact component={WelcomeScreen} />
      <Route path="/ClientList/" exact component={ClientList} />
      <Route path="/NewClient/" exact component={NewClient} />
      <Route path="/ContactList/" exact component={ContactList} />
    </Router>
  );
}

export default App;
