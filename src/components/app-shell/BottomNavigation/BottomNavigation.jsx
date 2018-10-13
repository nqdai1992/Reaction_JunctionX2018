import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  NavigationItem,
  AddActivity
} from "./BottomNavigationStyle";

const bottomNavigation = props => (
  <Container>
    <AddActivity />
    <NavigationItem>
      <NavLink exact to="/">
        Home
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink to="/chatbox">Chat Box</NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink to="/notifications">Notification</NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink to="/profile">User profile</NavLink>
    </NavigationItem>
  </Container>
);

export default bottomNavigation;
