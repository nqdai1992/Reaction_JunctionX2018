import React from "react";
import NotificationItem from "./NotificationItem";
import pic1 from "../../assets/hung-pic.jpg";
import pic2 from "../../assets/anh-choe.jpg";
import pic3 from "../../assets/anh-dai.jpg";

const generateNotification = number => {
  return Array.from(Array(number).keys()).map(() => <NotificationItem />);
};

class Notifications extends React.Component {
  render() {
    return (
      <div>
        <NotificationItem image={pic1} />
        <NotificationItem image={pic2} />
        <NotificationItem image={pic3} />
      </div>
    );
  }
}

export default Notifications;
