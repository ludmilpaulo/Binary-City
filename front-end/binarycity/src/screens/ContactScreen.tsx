import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function ContactScreen() {
  const [data, seData] = useState<any[]>([]);
  const navigate = useNavigate();

  console.log("conta li", data);

  const fetchCients = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/contact/", {
        method: "GET",

        // cache: 'no-cache',
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      if (resJson?.contacts?.length === 0) {
        alert("No Contacts Found");
        navigate("/AddContact/");
      } else {
        seData(resJson?.contacts);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCients();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          < Navbar />
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy bg-white">
              Contact List
            </h1>{" "}
            <br />
            <table className="border-separate border border-slate-500 table-auto bg-white">
              <thead>
                <tr>
                  <th className="border border-slate-600 text-left">Name</th>
                  <th className="border border-slate-600 text-left">Email</th>
                  <th className="border border-slate-600 text-center">
                    NO of Clients
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((contact) => (
                  <tr key={contact.id}>
                    <td className="border border-slate-700 text-left">
                      {contact.surname} {contact.name}
                    </td>
                    <td className="border border-slate-700 text-left">
                      {contact.email}
                    </td>
                    <td className="border border-slate-700 text-center">
                      {contact.link.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-end mt-4">
              <a href="https://ludmil.pythonanywhere.com/admin/clientList/contact/" >
                <h1 className="text-sm text-white underline hover:text-gray-900">
                  Link with client
                </h1>
              </a>

              <Link to={"/AddContact"}>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Add New Contact
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
