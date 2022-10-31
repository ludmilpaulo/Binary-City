import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising.webp";
import styled from "styled-components";



function ClientScreen() {
  const [data, seData] = useState<any[]>([]);

  const [loading, error] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/list/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => seData(resp.clients))
      .catch((error) => console.log(error));
  }, []);

  console.log("respose=>", data);

  return (

    <div className="flex-auto items-center">

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
    
      <Link to="/NewClient">
        <Button>
          <ButtonOverlay>
            <Rect6>
              <AddNewClient>Add New Client</AddNewClient>
            </Rect6>
          </ButtonOverlay>
        </Button>
      </Link>
      
        <Rect>
          <Rect2StackStack>
            <Rect2Stack>
              <Rect2></Rect2>
              <Clients>Clients</Clients>
              <ClientCode>Client Code</ClientCode>
              <Lps001>LPS001</Lps001>
              <Contac>Contac</Contac>
            </Rect2Stack>
            <Rect5></Rect5>
            <Name>Name</Name>
            <LoremIpsum>Ludmil Paulo Samuel Avelino</LoremIpsum>
            <LoremIpsum2>3</LoremIpsum2>
          </Rect2StackStack>
        </Rect>
      

  );
}

const Image = styled.img`
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
 border:none
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
  background-color: rgba(229,13,13,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const AddNewClient = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
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
  background-color: #E6E6E6;
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
  background-color: rgba(208,2,27,1);
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
  background-color: #E6E6E6;
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
export default ClientScreen;
