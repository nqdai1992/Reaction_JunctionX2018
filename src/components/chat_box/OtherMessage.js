import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import daiImage from "../../assets/anh-dai.jpg";
import { withStyles } from "@material-ui/core/styles";

const AlignRight = styled.div`
  text-align: left;
`;
const MessageWrapper = styled.div`
  display: inline-block;
  max-width: 50vw;
  background-color: #e7e7e7;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 10px;
  text-align: right;
  vertical-align: top;
`;
const styles = {
  avatar: {
    marginRight: "10px",
    display: "inline-block",
    verticalAlign: "top"
  }
};

class OtherMessage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AlignRight>
        <Avatar className={classes.avatar} src={daiImage} />
        <MessageWrapper>{this.props.text}</MessageWrapper>
      </AlignRight>
    );
  }
}

export default withStyles(styles)(OtherMessage);
