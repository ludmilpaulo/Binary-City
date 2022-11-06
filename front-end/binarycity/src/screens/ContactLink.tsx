import React, { useState, useEffect } from "react";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";


import Multiselect from "multiselect-react-dropdown";

export default function ContactLink() {
  const [data, setData] = useState<any[]>([{}]);
  const [cdata, setCdata] = useState<any[]>([]);

  const navigate = useNavigate();



  const [selectedClints, setSelectedClients] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState([]);

  let resId = selectedClints.map(({id})=>{
    return (id)
  })

  let handleSubmit = async (e: any) => {
   
    e.preventDefault();
    try {
      let res = await fetch("https://webhook.site/f3877b1a-5831-48c6-a5f5-e10576341a4d", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: 'no-cors',
        body: JSON.stringify({
          id: resId,
          contacts: selectedContacts,
          
        }),
      });
      let resJson = await res.json();

      if (res.status === 201) {
        alert("Contact created successfully");
        navigate("/ContactScreen/");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  const fetchContacts = () => {
    fetch("http://127.0.0.1:8000/contacts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCdata(resp))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCients();
    fetchContacts();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          <Navbar />
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
            <div className="text-4xl font-bold text-purple-600">
              <img src={require("../assets/images/logo1.png")} />
            </div>
            <div className="flex flex-col bg-white items-start">
              <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Linking Form
              </h1>

              <div className="mt-4 ">
                <Multiselect
                  options={data} // Options to display in the dropdown
                  // selectedValues={selectedValue} // Preselected value to persist in dropdown
                  onSelect={(e) => 
                    setSelectedClients(e)
                  } // Function will trigger on select event
                  onRemove={(e) => setSelectedClients(e)} // Function will trigger on remove event
                  placeholder="select the clients"
                  displayValue="client_name" // Property name to display in the dropdown options
                />
                <hr />
                <br />
                <Multiselect
                  options={cdata} // Options to display in the dropdown
                  // selectedValues={selectedValue} // Preselected value to persist in dropdown
                  onSelect={(e) => {
                    setSelectedContacts(e)
                  }} // Function will trigger on select event
                  onRemove={(e) => setSelectedContacts(e)
          
                  } // Function will trigger on remove event
                  placeholder="select the contacts"
                  displayValue="name" // Property name to display in the dropdown options
                />
              </div>

              <div className="flex items-center justify-end mt-4">
                <Link to={"/clients"}>
                  <h2 className="text-sm text-gray-600 underline hover:text-gray-900">
                    {" "}
                    Check Client List
                  </h2>
                </Link>
                <button
                onClick={handleSubmit}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Add New Contact
                </button>
              </div>
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
