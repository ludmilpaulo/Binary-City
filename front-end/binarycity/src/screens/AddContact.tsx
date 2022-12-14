import React, { useState, useEffect } from "react";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

export default function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");

  const navigate = useNavigate();

  const [data, setData] = useState<any[]>([]);

  const [link, setLink] = useState<any | null>(-1);

  const value = link !== -1 && data[link];

  let contact_id = [value.id];

  const fetchCients = () => {
    fetch("https://ludmil.pythonanywhere.com/clients/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCients();
  }, []);

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let res = await fetch("https://ludmil.pythonanywhere.com/contacts/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          link: contact_id,
        }),
      });
      let resJson = await res.json();

      if (res.status === 201) {
        alert("Contact created successfully");
        navigate("/ContactScreen/");
        setName("");
        setSurname("");
        setEmail("");
        setLink("");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          <Navbar />
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <div className="text-4xl font-bold text-purple-600">
              <img src={require("../assets/images/logo1.png")} />
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
              <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Contact Form
              </h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Name
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    surname
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="text"
                      name="name"
                      value={surname}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      type="email"
                      name="name"
                      value={email}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Select the Client to link
                  </label>

                  <select
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    {data?.map((client, index) => {
                      return (
                        <option key={client.id} value={index}>
                          {client?.client_name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex items-center justify-end mt-4">
                  <Link to={"/clients"}>
                    <h2 className="text-sm text-gray-600 underline hover:text-gray-900">
                      {" "}
                      Check Client List
                    </h2>
                  </Link>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  >
                    Add New Contact
                  </button>
                </div>
              </form>
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
