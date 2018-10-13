import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import imagePath from '../assets/hung-pic.jpg';

const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
  };

const UserProfile = (props) => {
    const { classes } = props;
    return (
    <div className={classes.row}>
        <Avatar 
            alt="Anh avarta cua Hung" 
            src={imagePath}  
            className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <h2 className={classes.avatar}>Dang Hoang Hung</h2>
        {/* <ul>
            <li>Id</li>
            <li>Age</li>
            <li>PhoneNumber</li>
            <li>PaymentMethod</li>
            <li>TransactionHistory
                <ul>
                    <li>Spending</li>
                    <li>Debt</li>
                    <li>Lending</li>
                </ul>
            </li>
        </ul> */}
    </div>
    )
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(UserProfile);