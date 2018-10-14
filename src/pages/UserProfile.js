import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import imagePath from '../assets/hung-pic.jpg';
import { Link } from 'react-router-dom';

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

 class UserProfile extends Component {
     render() {
        const { classes } = this.props;
        const userProfile = 
        (<div className={classes.color}>
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
            <div style={{marginLeft: '50px', lineHeight: '35px'}}>
                <ul style={{listStyle: 'none'}}>
                    <li>Id: ssdf112312gfwD</li>
                    <li>Age: 26</li>
                    <li>Phone number: 036 8273 625</li>
                    <li>Payment method: Debit Card</li>
                </ul>
            </div>
        </div>);
        
         return (
             <div>
                 {userProfile}
                 <div style={{margin: '30px', textAlign: 'left'}}>
                    <Button variant="outlined" color="secondary" style={{display: "block", margin: "20px auto"}}>
                        <Link to="/transaction-history">Transaction history</Link>
                    </Button>
                    <Button variant="outlined" color="secondary" style={{display: "block", margin: "20px auto"}}>
                        <Link to="/friends">Your friends're here!</Link>
                    </Button>
                    <Button variant="outlined" color="secondary" style={{display: "block", margin: "20px auto"}}>
                        <Link to="/group-list">Your precious groups!</Link>
                    </Button>
                 </div>
             </div>
         )
     }
 } 

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
