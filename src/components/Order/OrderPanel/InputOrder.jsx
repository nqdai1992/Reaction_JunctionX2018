import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;
  label {
  }
  input {
    display: block;
    outline: none;
    border: none;
    border-bottom: 1px solid #eee;
  }
`;

const inputOrder = props => (
  <Container>
    <h4>Write your order here</h4>
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" />
    </div>
    <div>
      <label htmlFor="price">Price</label>
      <input type="number" />
    </div>
  </Container>
);

export default inputOrder;
