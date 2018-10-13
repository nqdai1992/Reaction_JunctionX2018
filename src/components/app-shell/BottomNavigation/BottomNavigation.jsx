import React from "react";
import { NavLink } from "react-router-dom";
import { Container, NavigationItem } from "./BottomNavigationStyle";
import HomeIcon from "../../../assets/icons/home.svg";
import ChatIcon from "../../../assets/icons/chat.svg";
import NotiIcon from "../../../assets/icons/notifications.svg";
import UserIcon from "../../../assets/icons/user.svg";

const bottomNavigation = props => (
  <Container>
    <NavigationItem>
      <NavLink
        exact
        to="/"
        style={{
          backgroundImage: `url(${HomeIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </NavigationItem>
    <NavigationItem>
      <NavLink
        to="/chatbox"
        style={{
          backgroundImage: `url(${ChatIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </NavigationItem>
    <NavigationItem>
      <NavLink
        to="/notifications"
        style={{
          backgroundImage: `url(${NotiIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </NavigationItem>
    <NavigationItem>
      <NavLink
        to="/profile"
        style={{
          backgroundImage: `url(${UserIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      />
    </NavigationItem>
  </Container>
);

export default bottomNavigation;
