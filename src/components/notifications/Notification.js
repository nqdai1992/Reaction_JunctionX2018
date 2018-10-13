import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const NotificaitonWrapper = styled.div`
  height: 50px;
  width: 100%;
`;
class Notification extends React.Component {
  render() {
    return (
      <NotificaitonWrapper>
        <Paper className={classes.root} elevation={1}>
          <span>Hung</span>
          <span>Content</span>
        </Paper>
      </NotificaitonWrapper>
    );
  }
}
Notification.propTypes = {
  classes: PropTypes.object.isRequired
};
export default Notification;
