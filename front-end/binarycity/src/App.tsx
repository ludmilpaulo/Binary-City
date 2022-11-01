import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./screens/Welcome";
import ClientScreen from "./screens/ClientScreen";
import AddClient from "./screens/AddClient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/clients/" element={<ClientScreen />} />
        <Route path="/AddClient/" element={<AddClient />} />
      </Routes>
    </Router>
  );
}

export default App;
