import styled from "styled-components";

export const Container = styled.ul`
  background: aqua;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  list-style: none;
`;

export const NavigationItem = styled.li`
  flex: 1;
`;

export const AddActivity = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -32px;
  bottom: 32px;
  width: 64px;
  height: 64px;
  background: orange;
  border-radius: 50%;
`;
