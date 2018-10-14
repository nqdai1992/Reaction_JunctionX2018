import React, { Component } from "react";
import styled from "styled-components";
import Order from "../containers/Order/OrderPanel";
import YourMessage from "../components/chat_box/YourMessage";
import OtherMessage from "../components/chat_box/OtherMessage";
import BillMessage from "../components/chat_box/BillMessage";
import Send from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

const ChatWrapper = styled.div`
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;

const ChatContent = styled.div`
  padding: 10px 0;
  overflow-y: scroll;
  height: calc(100vh - 252px);
`;
export default class Chat extends Component {
  state = { message: "" };
  sendMessage = () => {
    this.setState({
      message: ""
    });
  };
  render() {
    return (
      <ChatWrapper>
        <Order />
        <ChatContent>
          <YourMessage text="your message" />
          <OtherMessage text="other message" />
          <BillMessage title="asda" price="10000" />
          <Input
            fullWidth
            type="text"
            value={this.state.message}
            onChange={e => {
              this.setState({
                message: e.target.value
              });
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Send message"
                  onClick={this.sendMessage}
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </ChatContent>
      </ChatWrapper>
    );
  }
}
