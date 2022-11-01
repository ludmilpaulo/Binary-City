import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./screens/Welcome";
import ClientScreen from "./screens/ClientScreen";
import AddClient from "./screens/AddClient";
import AddContact from "./screens/AddContact";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/clients/" element={<ClientScreen />} />
        <Route path="/AddClient/" element={<AddClient />} />
        <Route path="/AddContact/" element={<AddContact />} />
        <Route path="/ContactScreen/" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
