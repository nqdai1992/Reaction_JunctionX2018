import React, { Component } from "react";
import OrderRecordButton from "../components/OrderRecordButton/OrderRecordButton";
import styled from "styled-components";

const ChatWrapper = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;

export default class Chat extends Component {
  render() {
    return (
      <ChatWrapper>
        <OrderRecordButton />
      </ChatWrapper>
    );
  }
}
