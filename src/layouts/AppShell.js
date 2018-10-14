import React from "react";
import AppBar from "../components/app-shell/AppBar";
import Routes from "../router/routes";
import BottomNavigation from "../components/app-shell/BottomNavigation/BottomNavigation";
import styled from "styled-components";

const AppContent = styled.main`
  flex-grow: 1;
  height: center;
  color: #555;
  height: "100vh";
  overflow: "auto";
  padding: 56px 10px 64px;
`;
class AppShell extends React.Component {
  render() {
    return (
      <div>
        <AppBar openDrawer={this.openDrawer} />
        <AppContent>
          <Routes />
        </AppContent>
        <BottomNavigation />
      </div>
    );
  }
}

export default AppShell;
