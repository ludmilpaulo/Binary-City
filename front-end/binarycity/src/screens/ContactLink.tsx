import React, { useState, useEffect } from "react";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import { Link, useNavigate } from "react-router-dom";

export default function ContactLink() {

  const [data, seData] = useState<any[]>([]);
  const navigate = useNavigate();

   const fetchLinks =async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/link/", {
        method: "GET",
       
       // cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
      });
      let resJson = await res.json();
      console.log('l;iks==> repose', resJson)
      if (resJson?.links === 0) {
        alert("No Contacts Found");
      //  navigate("/AddClient/");
       
      } else {
        seData(resJson?.links)
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log('l;iks==>', data)

  useEffect(()=>{
    fetchLinks();
  }
  )

  
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
          <form >
           

       

           

            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Select the Client to link
              </label>
              
              <select 

  
              
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              {data?.map((client, index) => {
                return (
                <option  key={client.id} 
                value={index}
                >
                  {client?.client_name}</option>
               
          
                  )})}
              
              </select>


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
