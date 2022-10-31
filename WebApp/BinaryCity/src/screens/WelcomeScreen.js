import React, { Component } from "react";
import styled, { css } from "styled-components";

function WelcomeScreen(props) {
  return (
    <Image3
      src={require("../assets/images/binary-animation.gif")}
      resizeMode="cover"
    >
      <Image2 src={require("../assets/images/logo1.png")}></Image2>
      <Group>
        <Rect>
          <LoremIpsum>Welcome to BinaryCity</LoremIpsum>
        </Rect>
      </Group>
    </Image3>
  );
}

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
  background-color: rgba(208,2,27,1);
  border-radius: 100px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  font-size: 30px;
  margin-top: 26px;
  margin-left: 87px;
`;

export default WelcomeScreen;
