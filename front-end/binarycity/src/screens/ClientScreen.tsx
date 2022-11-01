import React, { useState, useEffect } from "react";
import { Table, Row, Col } from "react-bootstrap";
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={divStyle}>
          <Link to="/AddClient">
            <Button>
              <ButtonOverlay>
                <Rect6>
                  <AddNewClient>Add New Client</AddNewClient>
                </Rect6>
              </ButtonOverlay>
            </Button>
          </Link>

          <Rect>
            <div className="h-56 grid grid-cols-4 gap-4 content-start ...">
              <table className="border-separate border border-slate-500 table-auto">
                <thead>
                  <tr>
                    <th className="border border-slate-600 ...">Name</th>
                    <th className="border border-slate-600 ...">Client Code</th>
                    <th className="border border-slate-600 ...">NO</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((client) => (
                    <tr key={client.id}>
                      <td className="border border-slate-700 ...">
                        {client.name}
                      </td>
                      <td className="border border-slate-700 ...">
                        {client.client_code}
                      </td>
                      <td className="border border-slate-700 ...">
                        {client.client_code}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Rect>
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

export default ClientScreen;
