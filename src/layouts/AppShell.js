import React from "react";
import AppBar from "../components/app-shell/AppBar";
import AppDrawer from "../components/app-shell/AppDrawer";

class AppShell extends React.Component {
  state = {
    openDrawer: false
  };
  closeDrawer = () => {
    this.setState({
      openDrawer: false
    });
  };
  openDrawer = () => {
    this.setState({
      openDrawer: true
    });
  };
  render() {
    return (
      <div>
        <AppBar openDrawer={this.openDrawer} />
        <AppDrawer
          open={this.state.openDrawer}
          closeDrawer={this.closeDrawer}
        />
      </div>
    );
  }
}

export default AppShell;
