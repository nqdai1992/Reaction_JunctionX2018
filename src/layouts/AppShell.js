import React from "react";
import AppBar from "../components/app-shell/AppBar";
import Routes from "../router/routes";

class AppShell extends React.Component {
  render() {
    return (
      <div>
        <AppBar openDrawer={this.openDrawer} />
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}

export default AppShell;
