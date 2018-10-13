import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import imagePath from "../assets/hung-pic.jpg";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "left"
  }
});

class Notification extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Avatar
          alt="Anh avarta cua Hung"
          src={imagePath}
          className={classNames(classes.avatar)}
        />
        <Typography variant="subtitle2" component="div">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
    );
  }
}
Notification.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Notification);
