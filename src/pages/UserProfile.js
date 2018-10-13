import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import imagePath from '../assets/hung-pic.jpg';

const styles = {
    color: {
        color: 'black',
        textAlign: 'left',
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      margin: 20,
    },
    bigAvatar: {
      width: 60,
      height: 60,   
    },
  };

const UserProfile = (props) => {
    const { classes } = props;
    return (
    <div className={classes.color}>
        <div className={classes.row}>
            <Avatar 
                alt="Anh avarta cua Hung" 
                src={imagePath}  
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
            <div>
                <h2 style={{paddingLeft: '10px'}}>Dang Hoang Hung</h2>
                <Button color="secondary">Edit</Button>
            </div>
        </div>
        <div style={{width: '300px', margin: '0 auto'}}>
            <ul style={{listStyle: 'none'}}>
                <li>Id: ssdf112312gfwD</li>
                <li>Age: 26</li>
                <li>Phone number: 036 8273 625</li>
                <li>Payment method: Debit Card</li>
                <table style={{paddingTop: '30'}}>
                    <strong>Transaction history</strong>
                    <tr>
                        <td>Total Spending: </td>
                        <td>10,000,000 vnd</td>
                    </tr>
                    <tr>
                        <td>Total Debt: </td>
                        <td>5,000,000 vnd</td>
                    </tr>
                    <tr>
                        <td>Total Lending: </td>
                        <td>150,000,000 vnd</td>
                    </tr>
                </table>
            </ul>
        </div>
    </div>
  );
};

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
