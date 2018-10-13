import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddFriendInput from "../components/add_activity/MultipleAutocomplete";
const styles = theme => ({
  form: {
    padding: theme.spacing.unit
  }
});

class AddActivitiesForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <AddFriendInput />
        <TextField
          id="outlined-multiline-static"
          fullWidth
          label="Location"
          defaultValue="Default Value"
          margin="normal"
        />
        <TextField
          id="outlined-multiline-static"
          fullWidth
          label="Description"
          multiline
          rows="4"
          defaultValue="Default Value"
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(styles)(AddActivitiesForm);
