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
      <NavLink
        activeStyle={{
          display: "block",
          height: "64px",
          lineHeight: "64px"
        }}
        to="/"
      >
        Home
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink
        activeStyle={{
          display: "block",
          height: "64px",
          lineHeight: "64px"
        }}
        to="/"
      >
        Chat Box
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink
        activeStyle={{
          display: "block",
          height: "64px",
          lineHeight: "64px"
        }}
        to="/notifications"
      >
        Notification
      </NavLink>
    </NavigationItem>
    <NavigationItem>
      <NavLink
        activeStyle={{
          display: "block",
          height: "64px",
          lineHeight: "64px"
        }}
        to="/"
      >
        User profile
      </NavLink>
    </NavigationItem>
  </Container>
);

export default bottomNavigation;
