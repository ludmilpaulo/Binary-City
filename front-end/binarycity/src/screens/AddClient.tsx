import React, { Fragment, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");

  const submitHandler = () => {
    fetch("https://webhook.site/f3877b1a-5831-48c6-a5f5-e10576341a4d", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        body: email,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {})
      .catch((err) => {
        console.log(err.message);
      });
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
              <form>
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
                      onChange={(e) => setName(name)}
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
                      onChange={(e) => setSurname(surname)}
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
                      onChange={(e) => setEmail(email)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                  <a
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                    href="#"
                  >
                    Already registered?
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    onClick={submitHandler}
                  >
                    Register
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

const Main = styled.img`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
  display: block;
  background: none;
  height: 100%;
  width: 100%;
  border: none;
`;
const Button = styled.div`
  width: 387px;
  height: 52px;
  flex-direction: column;
  display: flex;
  margin-top: 48px;
  margin-left: 457px;
  border: none;
`;

const Rect6 = styled.div`
  width: 387px;
  height: 52px;
  background-color: rgba(229, 13, 13, 1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const AddNewClient = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  font-size: 29px;
  margin-top: 12px;
  margin-left: 94px;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 937px;
  height: 467px;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  margin-left: 203px;
`;

const Rect = styled.div`
  width: 937px;
  height: 467px;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
  flex: 0 0 auto;
`;

const Rect2 = styled.div`
  top: 0px;
  left: 0px;
  width: 937px;
  height: 66px;
  position: absolute;
  background-color: rgba(208, 2, 27, 1);
`;

const Clients = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 354px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 64px;
`;

const ClientCode = styled.span`
  font-family: Roboto;
  top: 71px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 44px;
  width: 246px;
  height: 60px;
  left: 357px;
`;

const Lps001 = styled.span`
  font-family: Roboto;
  top: 127px;
  left: 417px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const Contac = styled.span`
  font-family: Roboto;
  top: 59px;
  left: 688px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 64px;
`;

const Rect2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 937px;
  height: 151px;
  position: absolute;
`;

const Rect5 = styled.div`
  top: 121px;
  left: 15px;
  width: 7px;
  height: 1px;
  position: absolute;
  background-color: #e6e6e6;
`;

const Name = styled.span`
  font-family: Roboto;
  top: 71px;
  left: 53px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 44px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  top: 127px;
  left: 18px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  top: 134px;
  left: 778px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 20px;
`;

const Rect2StackStack = styled.div`
  width: 937px;
  height: 158px;
  position: relative;
`;
