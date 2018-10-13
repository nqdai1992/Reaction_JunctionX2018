import React from "react";
import NotificationItem from "./NotificationItem";

const generateNotification = number => {
  return Array.from(Array(number).keys()).map(() => <NotificationItem />);
};

class Notifications extends React.Component {
  render() {
    return <div>{generateNotification(3)}</div>;
  }
}

export default Notifications;
