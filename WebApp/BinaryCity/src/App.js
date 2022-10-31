import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./icons.js";
import WelcomeScreen from "./screens/WelcomeScreen";
import ClientList from "./screens/ClientList";
import NewClient from "./screens/NewClient";
import ContactList from "./screens/ContactList";
import "./style.css";

function App() {
  return (
    <div>
      <WelcomeScreen />
    <Router>
      <Routes>
        <Route path='/' element={ <WelcomeScreen />} />
        <Route exact path="/WelcomeScreen/" element={<WelcomeScreen />} />
        <Route path="/ClientList/" exact component={ClientList} />
        <Route path="/NewClient/" exact component={NewClient} />
        <Route path="/ContactList/" exact component={ContactList} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
