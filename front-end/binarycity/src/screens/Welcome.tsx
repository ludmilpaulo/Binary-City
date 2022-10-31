import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/binary-animation.gif";
import logo from "../assets/logo.png";

function Welcome() {
  console.log("chegou");

  const shoot = () => {
  
  };

  return (
    <div className="flex-auto items-center">
      <div className="absolute top-0 right-0 block w-9/12 h-full min-w-full">
        <img
          alt="Snowy mountain lake"
          className="h-full min-w-full"
          src={logo}
        />
      </div>

      <div
        className="bg-cover bg-center ..."
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
      <img src={background}></img>
      </div>
    
      <div className="grid justify-items-center ...">

      <Link to={"/clients/"}> 

      <button
          onClick={shoot}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 items-center"
        >
          Welcome to Binary City
        </button>


      </Link>
        
       
     
      </div>
    </div>
  );
}

export default Welcome;
