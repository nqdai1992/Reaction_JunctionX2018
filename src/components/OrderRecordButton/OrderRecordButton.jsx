import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  position: fixed;
  bottom: 84px;
  right: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #3b4dfb;

  i {
    font-size: 42px;
    color: black;
  }
`;

const orderRecordButton = props => (
  <IconWrapper>
    <i class="fas fa-concierge-bell" />
  </IconWrapper>
);

export default orderRecordButton;
