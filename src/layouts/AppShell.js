import React from "react";
import AppBar from "../components/app-shell/AppBar";
import Routes from "../router/routes";
import styled from "styled-components";

const AppContent = styled.main`
  flex-grow: 1;
  height: center;
  color: palevioletred;
  height: "100vh";
  overflow: "auto";
  padding-top: 56px;
`;
class AppShell extends React.Component {
  render() {
    return (
      <div>
        <AppBar openDrawer={this.openDrawer} />
        <AppContent>
          <Routes />
        </AppContent>
      </div>
    );
  }
}

export default AppShell;
