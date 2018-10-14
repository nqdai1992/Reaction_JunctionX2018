import API from "../@api/index";
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
import app from "../components/Firebase";
import firebase from "firebase";

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

let groupId = "P5N7gjJrMegCNqvyO0a3";
const db = firebase.firestore(app);
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
export default class Chat extends Component {
  state = {
    message: "",
    currentGroup: {}
  };
  sendMessage = async () => {
    let { id, ...data } = this.state.currentGroup;
    if (this.state.currentGroup.chat) {
      data.chat.push({
        userId: currentUser.id,
        message: this.state.message
      });
    } else {
      data.chat = [
        {
          userId: currentUser.id,
          message: this.state.message
        }
      ];
    }
    await API.groups.update(id, data);
    this.setState({
      message: ""
    });
  };
  async componentDidMount() {
    const groupData = await API.groups.get();
    const group = groupData.data.groups[groupId];
    this.setState({
      currentGroup: Object.assign({}, group, { id: groupId })
    });
    db.collection("groups")
      .doc("P5N7gjJrMegCNqvyO0a3")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    db.collection("groups")
      .doc("P5N7gjJrMegCNqvyO0a3")
      .onSnapshot(function(doc) {
        console.log(doc);
      });
  }
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
                  <Send onClick={this.sendMessage} />
                </IconButton>
              </InputAdornment>
            }
          />
        </ChatContent>
      </ChatWrapper>
    );
  }
}
