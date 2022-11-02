import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap";
import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AddClient() {

  const [name, setName] = useState("");



  
  /*
  let code = name;
  let cdata = code.split(" "),
    output = "";

  for (var i = 0; i < cdata.length; i++) {
    output += cdata[i].substring(0, 1);
  }
  let code2 = surname[0].toUpperCase();
  let clientCode = output.toUpperCase() + surname[0].toUpperCase();
  console.log("testing", clientCode);

  */

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let res = await fetch("https://webhook.site/f3877b1a-5831-48c6-a5f5-e10576341a4d", {
        method: "POST",
        body: JSON.stringify({
          name: 'name',
          email: 'email',
          mobileNumber: 'mobileNumber',
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");

        alert("User created successfully");
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
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <div className="text-4xl font-bold text-purple-600">
              <img src={require("../assets/images/logo1.png")} />
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Add Client
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

                
                <div className="mt-4">
                  <label
                 
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Select the Linked Contact
                  </label>
                  <div className="flex flex-col items-start">
                  <div className="inline-block relative w-64">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                          <option>Really long option that will likely overlap the chevron</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                 <Link to={'/ContactScreen'}>
                    <h2 className="text-sm text-gray-600 underline hover:text-gray-900"> Check Contact List</h2>
               </Link>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  >
                    Add New Client
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