import React from "react";
import styled from "styled-components";
const AlignLeft = styled.div`
  text-align: right;
`;
const MessageWrapper = styled.div`
  display: inline-block;
  max-width: 50vw;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  text-align: left;
  color: #3f51b5;
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
