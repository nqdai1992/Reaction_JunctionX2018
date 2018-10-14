import React, { Component } from "react";
import styled from "styled-components";
import Order from "../containers/Order/OrderPanel";

const ChatWrapper = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;

export default class Chat extends Component {
  render() {
    return (
      <ChatWrapper>
        <Order />
      </ChatWrapper>
    );
  }
}
