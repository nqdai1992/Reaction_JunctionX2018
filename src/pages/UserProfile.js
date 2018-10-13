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
    constructor(props) {
        super(props);
        this.state = {
            isLinkClicked: false
        };
      }

     handleClick = () => {
         this.setState({ isLinkClicked:true })
     }

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
            <div style={{marginLeft: '50px'}}>
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
                 <div><Link to="/transaction-history" onClick={this.handleClick}>Transaction history</Link></div>
                 <div><Link to="/friends">Your friends're here!</Link></div>
                 <div><Link to="/group-list">You join these groups!</Link></div>
                 
             </div>
         )
     }
 } 

UserProfile.propTypes = {
 classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserProfile);
