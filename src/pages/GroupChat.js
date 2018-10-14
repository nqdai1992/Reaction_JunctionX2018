import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import daiImage from "../assets/anh-dai.jpg";
import hungImage from "../assets/hung-pic.jpg";
import choeImage from "../assets/anh-choe.jpg";

const styles = theme => ({
  spend: {
    display: "block",
    backgroundColor: "gray",
    borderRadius: 20
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer"
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 20
  },
  time: {
    margin: 10
  },
  circleButton: {
    margin: "0 auto",
    width: 25,
    height: 25,
    backgroundColor: "#3b4dfb",
    borderRadius: "50%",
    color: "white"
  },
  oneLine: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    textAlign: "left"
  }
});

const GroupChat = props => {
  const { classes } = props;

  return (
    <div style={{ color: "black", marginTop: "30px", paddingBottom: "60px" }}>
      <div
        onClick={() => {
          window.location = "/chat_box";
        }}
        className={classes.row}
      >
        <div className={classes.oneLine}>
          <div>
            <Avatar
              src={choeImage}
              alt="Danag Trip"
              className={classes.avatar}
            />
          </div>
          <div>
            <h3>Da Nang Trip!!</h3>
            <div style={{}}>Tien Vi</div>
            <div style={{ color: "violet" }}>Added expenses</div>
          </div>
        </div>
        <div>
          <div className={classes.time}>16:00</div>
          <div className={classes.circleButton}>11</div>
        </div>
      </div>
      <hr />

      <div className={classes.row}>
        <div className={classes.oneLine}>
          <div>
            <Avatar
              src={daiImage}
              alt="Danag Trip"
              className={classes.avatar}
            />
          </div>
          <div>
            <h3>Da Nang Trip!!</h3>
            <div style={{ color: "violet" }}>Added expenses</div>
          </div>
        </div>
        <div>
          <div className={classes.time}>8:00</div>
        </div>
      </div>
      <hr />

      <div className={classes.row}>
        <div className={classes.oneLine}>
          <div>
            <Avatar
              src={hungImage}
              alt="Danag Trip"
              className={classes.avatar}
            />
          </div>
          <div>
            <h3>Da Nang Trip!!</h3>
            <div style={{ color: "violet" }}>Spend money request</div>
          </div>
        </div>
        <div>
          <div className={classes.time}>11:00</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

GroupChat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupChat);
