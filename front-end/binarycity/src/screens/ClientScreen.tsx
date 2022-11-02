import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import styled from "styled-components";

function ClientScreen() {
  const [data, seData] = useState<any[]>([]);
  const navigate = useNavigate();

  const lo = "error";
  const s = 3;
  console.log("size", lo.slice(0, s));

  if (data.length === 0) {
    alert("No clients Found");
    // navigate("/AddClient/");
  }

  const fetchCients = () => {
    fetch("http://127.0.0.1:8000/contacts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => seData(resp.clients))
      .catch((error) => console.log(error));
  };

  console.log("retrievd", data)

  useEffect(() => {
    fetchCients();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy text-red ">
              Client List
            </h1>
            <table className="border-separate border border-slate-500 table-auto bg-white">
              <thead>
                <tr>
                  <th className="border border-slate-600 ...">Name</th>
                  <th className="border border-slate-600 ...">Client Code</th>
                </tr>
              </thead>
              <tbody>
                {data.map((client) => (
                  <tr key={client.id}>
                    <td className="border border-slate-700 ...">
                      {client.client_name}
                    </td>
                    <td className="border border-slate-700 ...">
                      {client.client_code.slice(0, s)}0{client.id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link to={"/AddClient"}>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Add New Client
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const divStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + background + ")",
};

export default ClientScreen;
