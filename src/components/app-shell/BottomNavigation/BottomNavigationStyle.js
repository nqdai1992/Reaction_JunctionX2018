import styled from "styled-components";

export const Container = styled.ul`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #eee;
  background: white;
  list-style: none;
`;

export const NavigationItem = styled.li`
  flex: 1;
  > a {
    display: block;
    height: 64px;
    line-height: 64px;
  }
`;
