import React from "react";
import NotificationList from "../components/notifications/NotificationList";
import firebase from "../components/Firebase";

const db = firebase.firestore();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

class Notifications extends React.Component {
  state = {
    notifications: currentUser.notifications || []
  };
  componentDidMount() {
    db.collection("users")
      .doc(currentUser.id)
      .onSnapshot(function(doc) {
        console.log(doc);
      });
  }
  render() {
    return (
      <div>
        <NotificationList />
      </div>
    );
  }
}
export default Notifications;
