import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import styled from "styled-components";

function Welcome() {
  return (
    <div style={divStyle}>
       <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>



        <div style={divStyle}>
          <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
          
          <div className="App-header">
          <img src={require("../assets/logo.png")} className="App-logo" alt="logo" />

        </div>
            

            <Link to={"/clients"}>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-red-900 border border-transparent rounded-md active:bg-red-900 false"
              >
                Welcome To Binary-City
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

const Image3 = styled.img`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Image2 = styled.img`
  width: 1131px;
  height: 100%;
  margin-top: 22px;
  align-self: center;
  object-fit: contain;
`;

const Group = styled.div`
  width: 509px;
  height: 87px;
  flex-direction: column;
  display: flex;
  margin-top: 34px;
  margin-left: 444px;
`;

const Rect = styled.div`
  width: 509px;
  height: 87px;
  background-color: rgba(208, 2, 27, 1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  margin-top: 26px;
  margin-left: 87px;
`;

export default Welcome;
