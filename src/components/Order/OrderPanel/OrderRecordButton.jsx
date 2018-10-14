import React from "react";
import styled from "styled-components";
import OrderCat from "../../../assets/icons/order-cat-2.png";

const IconWrapper = styled.div`
  width: 116px;
  height: 116px;
  margin-right: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-image: url(${OrderCat});
  background-size: 120%;
  background-position: center;

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
