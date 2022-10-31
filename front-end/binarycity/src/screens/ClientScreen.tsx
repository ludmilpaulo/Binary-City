import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";

import logo from "../assets/logo.png";

function ClientScreen() {
  const [data, seData] = useState<any[]>([]);

  const [loading, error] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/list/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => seData(resp.clients))
      .catch((error) => console.log(error));
  }, []);

  console.log("respose=>", data);

  return (
    <div className="align-items-center">
      <Row className="align-items-center">
        <Col>
          <h1>Clients</h1>
        </Col>

        <Col className="text-right">
          <Button className="my-3">
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            
    
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.client_code}</td>

              <td>
               
                  <Button variant="light">
                    <i className="fas fa-edit"></i>
                  </Button>
             

                <Button variant="danger" className="btn-sm">
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ClientScreen;
