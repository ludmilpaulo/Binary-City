import React, { useState, useEffect } from "react";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import { Link } from "react-router-dom";


export default function AddContact() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");

  const [data, setData ] = useState<any[]>([]);


  const fetchCients = () => {
    fetch("http://127.0.0.1:8000/contacts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((error) => console.log(error));
  };

  const tags = Object.keys(data).reduce((result, key) => {
    return result.concat(data[0].link);
  }, [])

  console.log("testing", tags);

  useEffect(() => {
    fetchCients();
  }, []);

  let handleSubmit = async (e: any) => {
    let code = name;
    let cdata = code.split(" "),
      output = "";

    for (var i = 0; i < cdata.length; i++) {
      output += cdata[i].substring(0, 1);
    }
    let code2 = surname[0].toUpperCase();
    let clientCode = output.toUpperCase() + surname[0].toUpperCase();
   

    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/clients/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          surname: surname,
          client_code: clientCode,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setEmail("");
        setSurname("");
        alert("Contact created successfully");
      } else {
        alert("Some error occured please verifiy your Infromation");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return( <div style={{ display: "flex", flexDirection: "column" }}>
  <div style={{ display: "flex", flex: 1 }}>
    <div style={divStyle}>
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

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-start">
              <select>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              </div>



            </div>

            <div className="flex items-center justify-end mt-4">
             <Link to={'/clients'}>
                <h2 className="text-sm text-gray-600 underline hover:text-gray-900"> Check Client List</h2>
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
  )
}

const divStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(" + background + ")",
  };
