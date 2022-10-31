import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialUnderlineTextbox1 from "../components/MaterialUnderlineTextbox1";
import MaterialUnderlineTextbox2 from "../components/MaterialUnderlineTextbox2";
import { Link } from "react-router-dom";

function NewClient(props) {
  return (
    <Image
      src={require("../assets/images/62262234-binary-city-on-grey-vector-illustration-template-for-advertising1.webp")}
      resizeMode="cover"
    >
      <Group3>
        <Group>
          <MaterialUnderlineTextbox
            style={{
              height: 68,
              width: 384
            }}
          ></MaterialUnderlineTextbox>
          <MaterialUnderlineTextbox1
            style={{
              height: 43,
              width: 360,
              marginTop: 65,
              marginLeft: 12
            }}
          ></MaterialUnderlineTextbox1>
          <MaterialUnderlineTextbox2
            style={{
              height: 43,
              width: 360,
              marginTop: 61,
              marginLeft: 12
            }}
          ></MaterialUnderlineTextbox2>
        </Group>
      </Group3>
      <Link to="/ClientList">
        <Button>
          <ButtonOverlay>
            <Rect>
              <AddNewCilent>Add New Cilent</AddNewCilent>
            </Rect>
          </ButtonOverlay>
        </Button>
      </Link>
    </Image>
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
const Group3 = styled.div`
  width: 539px;
  height: 404px;
  flex-direction: column;
  display: flex;
  margin-top: 134px;
  margin-left: 414px;
`;

const Group = styled.div`
  width: 539px;
  height: 404px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
`;

const Button = styled.div`
  width: 368px;
  height: 62px;
  flex-direction: column;
  display: flex;
  margin-top: 53px;
  margin-left: 499px;
  border: none;
`;

const Rect = styled.div`
  width: 368px;
  height: 62px;
  background-color: rgba(225,30,30,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const AddNewCilent = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  text-align: center;
  font-size: 26px;
  margin-top: 18px;
  margin-left: 94px;
`;

export default NewClient;
