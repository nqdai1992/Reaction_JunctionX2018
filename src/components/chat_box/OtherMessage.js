import React from "react";
import styled from "styled-components";

const AlignRight = styled.div`
  text-align: left;
`;
const MessageWrapper = styled.div`
  display: inline-block;
  max-width: 50vw;
  border: 1px solid #3f51b5;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  text-align: right;
  color: #3f51b5;
`;

class OtherMessage extends React.Component {
  render() {
    return (
      <AlignRight>
        <MessageWrapper>{this.props.text}</MessageWrapper>
      </AlignRight>
    );
  }
}

export default OtherMessage;
