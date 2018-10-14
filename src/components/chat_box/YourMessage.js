import React from "react";
import styled from "styled-components";
const AlignLeft = styled.div`
  text-align: right;
`;
const MessageWrapper = styled.div`
  display: inline-block;
  max-width: 50vw;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: left;
  color: #fafafa;
  background-color: #3743ef;
`;
class YourMessage extends React.Component {
  render() {
    return (
      <AlignLeft>
        <MessageWrapper>{this.props.text}</MessageWrapper>
      </AlignLeft>
    );
  }
}

export default YourMessage;
