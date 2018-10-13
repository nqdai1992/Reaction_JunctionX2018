import API from "../@api/index";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Face from "@material-ui/icons/Face";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  form: {
    padding: theme.spacing.unit
  },
  actions: {
    marginBottom: theme.spacing.unit * 3
  },
  paper: {
    boxSizing: "border-box",
    position: "absolute",
    width: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "&:nth-child(odd)": {
      backgroundColor: "#EEE"
    }
  },
  baseInfo: {
    marginBottom: theme.spacing.unit * 2
  }
});

class AddActivitiesForm extends React.Component {
  state = {
    openModal: false,
    groupTitle: "",
    groupDescription: "",
    friend: [],
    member: []
  };
  componentDidMount() {
    let myaccount = JSON.parse(localStorage.getItem("currentUser"));
    if (myaccount) {
      this.setState({
        member: [myaccount]
      });
    }
  }
  createGroup = async () => {
    const randomString = Date.now();
    await API.groups.create({
      _id: randomString,
      title: this.state.groupTitle,
      description: this.state.groupDescription,
      member: this.state.member
    });
    let groupData = await API.groups.get();
    let groups = Object.values(groupData.data.groups);
    let selectedGroup = groups.find(item => item._id === randomString);
    if (selectedGroup) {
      const member = this.state.member.slice(0);
      member.forEach(async mem => {
        let data;
        if (!mem.groups) {
          data = Object.assign({}, mem, { groups: [selectedGroup] });
        } else {
          mem.groups.push(selectedGroup);
          data = Object.assign({}, mem);
        }
        if (!data.notifications) {
          data = Object.assign({}, data, {
            notifications: [
              {
                type: "unread",
                content: "You is joined a new group",
                request: "Check group",
                groupId: selectedGroup.id
              }
            ]
          });
        } else {
          data.notifications.push({
            type: "unread",
            content: "You is joined a new group",
            request: "Check group",
            groupId: selectedGroup.id
          });
        }
        let { id, ...newData } = data;
        await API.users.update(id, newData);
      });
    }
  };
  handleCloseModal = () => {
    this.setState({ openModal: false });
  };
  handleOpenModal = () => {
    this.setState({ openModal: true });
  };
  addFriend = item => {
    const updatedMember = this.state.member.slice(0);
    const updatedFriend = this.state.friend.filter(f => f.email !== item.email);
    updatedMember.push(item);
    this.setState({
      friend: updatedFriend,
      member: updatedMember,
      openModal: false
    });
  };
  getFriend = async () => {
    const res = await API.users.get();
    const { users } = res.data;
    const currentuser = JSON.parse(localStorage.getItem("currentUser"));
    const userList = [];
    for (let uid in users) {
      let data = Object.assign(
        {},
        {
          id: uid
        },
        users[uid]
      );
      if (data.email !== currentuser.email) {
        userList.push(data);
      }
    }
    console.log(userList);
    this.setState({
      friend: userList
    });
    this.handleOpenModal();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form}>
        <Grid className={classes.actions} container justify="space-between">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.button}
            onClick={this.getFriend}
          >
            Invite
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            onClick={this.createGroup}
          >
            Create group
          </Button>
        </Grid>
        <div className={classes.baseInfo}>
          <Typography variant="body2" align="left">
            Group information
          </Typography>
          <TextField
            id="outlined-multiline-static"
            fullWidth
            label="Location"
            margin="normal"
            onInput={e => {
              this.setState({ groupTitle: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-static"
            fullWidth
            label="Description"
            multiline
            rows="4"
            margin="normal"
            variant="outlined"
            onInput={e => {
              this.setState({ groupDescription: e.target.value });
            }}
          />
        </div>
        <Typography variant="body2" align="left">
          Member
        </Typography>
        <List>
          {this.state.member.map(item => (
            <ListItem key={JSON.stringify(item)}>
              <Avatar>
                <Face />
              </Avatar>
              <ListItemText primary={item.name} secondary={item.email} />
            </ListItem>
          ))}
        </List>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openModal}
          onClose={this.handleCloseModal}
        >
          <div className={classes.paper}>
            <div className={classes.root}>
              <List>
                {this.state.friend.map(item => (
                  <ListItem
                    key={JSON.stringify(item)}
                    onClick={() => {
                      this.addFriend(item);
                    }}
                  >
                    <Avatar>
                      <Face />
                    </Avatar>
                    <ListItemText primary={item.name} secondary={item.email} />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(AddActivitiesForm);
