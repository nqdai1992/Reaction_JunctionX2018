import React, { Component } from "react";
import OrderCat from "../../components/Order/OrderPanel/OrderRecordButton";
import PersonalOrder from "../../components/Order/OrderPanel/PersonalOrder";
import GroupOrder from "../../components/Order/OrderPanel/GroupOrder";
import InputOrder from "../../components/Order/OrderPanel/InputOrder";
import styled from "styled-components";

const Container = styled.div`
  height: 128px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px;
`;

export default class OrderPanel extends Component {
  render() {
    return (
      <Container>
        <OrderCat />
        <InputOrder />
      </Container>
    );
  }
}
