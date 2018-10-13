import React from "react";
import styled from "styled-components";

export const AddActivity = styled.div`
  position: fixed;
  right: 20px;
  margin-left: -32px;
  bottom: 80px;
  width: 64px;
  height: 64px;
  background: #3b4dfb;
  border-radius: 50%;
  color: white;
  line-height: 64px;
  font-size: 48px;
`;

const addActivityButton = props => <AddActivity>+</AddActivity>;

export default addActivityButton;
