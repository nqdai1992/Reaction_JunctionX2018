import React from "react";
import AppBar from "../components/app-shell/AppBar";
import Routes from "../router/routes";
import BottomNavigation from "../components/app-shell/BottomNavigation/BottomNavigation";

class AppShell extends React.Component {
  render() {
    return (
      <div>
        <AppBar openDrawer={this.openDrawer} />
        <div>
          <Routes />
        </div>
        <BottomNavigation />
      </div>
    );
  }
}

export default AppShell;
