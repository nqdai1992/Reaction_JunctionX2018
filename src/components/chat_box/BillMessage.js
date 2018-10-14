import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
const Wrapper = styled.div`
  background-color: #3f51b5;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;
const styles = theme => ({
  button: {
    color: "#fff",
    borderColor: "#fff"
  }
});
class OtherMessage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Grid container>
          <Grid xs={9}>
            <div>{this.props.title}</div>
            <div>{this.props.price}</div>
          </Grid>
          <Grid xs={3}>
            <Button size="small" variant="outlined" className={classes.button}>
              Join
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(OtherMessage);
