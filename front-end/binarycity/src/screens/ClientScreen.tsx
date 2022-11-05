import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import styled from "styled-components";
import Navbar from "./NavBar";

function ClientScreen() {
  const [data, seData] = useState<any[]>([]);
  const navigate = useNavigate();

  const lo = "error";
  const s = 3;
  console.log("size", lo.slice(0, s));

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetchCients = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/list/", {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      console.log("retrievd bate", resJson);
      if (resJson?.clients?.length === 0) {
        alert("No clients Found");
        navigate("/AddClient/");
      } else {
        seData(resJson?.clients);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("retrievd bate", data);

  useEffect(() => {
    fetchCients();
    // verify();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          <Navbar />
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy text-red  bg-white">
              Client List
            </h1>
            <table className="border-separate border border-slate-500 table-auto bg-white">
              <thead>
                <tr>
                  <th className="border border-slate-600 text-left">Name</th>
                  <th className="border border-slate-600 text-left">
                    Client Code
                  </th>
                  <th className="border border-slate-600 text-center">
                    No of contacts
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((client) => (
                  <tr key={client.id}>
                    <td className="border border-slate-700 text-left">
                      {client.client_name}
                    </td>
                    <td className="border border-slate-700 text-left">
                      {client.client_code.slice(0, s).toUpperCase()}0{client.id}
                    </td>
                    <td className="border border-slate-700 text-center">
                      {client.contacts?.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-end mt-4">
              <a href="http://127.0.0.1:8000/admin/clientList/contact/">
                <h2 className="text-sm text-white-600 underline hover:text-white-900">
                  {" "}
                  Link With Contact
                </h2>
              </a>

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
