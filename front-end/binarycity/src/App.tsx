import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Route } from "react-router-dom";

import Welcome from "./screens/Welcome";
import ClientScreen from "./screens/ClientScreen";

function App() {
  return (
    <Router>
      <ClientScreen />
      <main className="py-3">
        <Container>
          <Route path="/" element={<Welcome />} />
          <Route path="/clients/" element={<ClientScreen/>} />
        </Container>
      </main>
    </Router>
  );
}

export default App;
