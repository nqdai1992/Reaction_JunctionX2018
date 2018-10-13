import React from "react";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";

class AppDrawer extends React.Component {
  closeDrawer = () => {
    this.props.closeDrawer();
  };
  render() {
    return (
      <Drawer open={this.props.open} onClose={this.closeDrawer}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.closeDrawer}
          onKeyDown={this.closeDrawer}
        >
          <div>Test</div>
        </div>
      </Drawer>
    );
  }
}
AppDrawer.propTypes = {
  open: PropTypes.object.isRequired
};
export default AppDrawer;
