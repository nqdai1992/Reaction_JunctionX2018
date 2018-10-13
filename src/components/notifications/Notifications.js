import React from "react";
import Notification from "./Notification";

const generateNotification = number => {
  return Array.from(Array(number).keys()).map(() => <Notification />);
};

class Notifications extends React.Component {
  render() {
    return <div>{generateNotification(3)}</div>;
  }
}

export default Notifications;
