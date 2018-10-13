import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import daiImage from '../assets/anh-dai.jpg';
import choeImage from '../assets/anh-choe.jpg';

const styles = {
    color: {
        color: 'black',
        textAlign: 'left',
    },
    top: {
        margin: 30,
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
 
const Friends = (props) => {
    const { classes } = props;

    return (
        <div className={classes.color}>
            <h1 style={{textAlign: "center", paddingTop: "20px"}}>MY FRIENDS</h1>
            <Card className={classes.top}>
                <CardContent>
                <div className={classes.row}>
                    <Avatar
                        alt="anh cua Dai"
                        src={daiImage}
                        className={classes.avatar}
                    />
                    <div>
                        <h2 style={{paddingLeft: '10px'}}>Nguyen Quoc Dai</h2>
                    </div>
                </div>
                </CardContent>
            </Card>
            <Card className={classes.top}>
                <CardContent>
                <div className={classes.row}>
                    <Avatar
                        alt="anh cua Choe"
                        src={choeImage}
                        className={classes.avatar}
                    />
                    <div>
                        <h2 style={{paddingLeft: '10px'}}>Thanh Nga</h2>
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
    )
}

Friends.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(Friends);