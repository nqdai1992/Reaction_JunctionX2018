import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Search from "@material-ui/icons/Search";
import AddCircle from "@material-ui/icons/AddCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import history from "../../history";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    history: history,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleGoBack = () => {
    this.setState({ history: history.goBack() });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const standardBar = (
        <AppBar>
          <Toolbar>
            <IconButton onClick={this.handleGoBack.bind(this)} color="inherit">
              <ArrowBack />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.grow}
            >
              Reaction
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Link to="/sign_in">Sign in</Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>);

    const chatBox = (
        <AppBar>
        <Toolbar>
          <IconButton onClick={this.handleGoBack.bind(this)} color="inherit">
            <ArrowBack />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.grow}
          >
            Chat in groups
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AddCircle style={{marginRight: "5px"}}/>

              </IconButton>
              <IconButton
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Search />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <Link to="/sign_in">Sign in</Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>);

    const localUrl = window.location.href;
    let detectUrl = localUrl.split("/");

    return (
      <div className={classes.root}>
        { 
          detectUrl[detectUrl.length - 1] === "group-chat" ? chatBox : standardBar
          }
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
