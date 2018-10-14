import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import daiImage from '../assets/anh-dai.jpg';
import hungImage from '../assets/hung-pic.jpg';
import choeImage from '../assets/anh-choe.jpg';

const styles = theme => ({
  spend: {
    display: 'block',
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  time: {
    margin: 10,
  },
  oneLine: {
    margin: 10,
    display: 'flex',
    textAlign: "left",
  },
});

const GroupChat = (props) => {
    const { classes } = props;

    return (
    <div style={{color: 'black', marginTop: '30px', paddingBottom: '60px'}}>
        <div className={classes.row}>
            <div className={classes.oneLine}>
                <div>
                    <Avatar src={choeImage} alt="Danag Trip" className={classes.avatar}/>
                </div>
                <div>
                    <h3>Da Nang Trip!!</h3>
                    <div>Tien Vi</div>
                    <div>Added expenses</div>
                </div>
            </div>
            <div>
                <div className={classes.time}>16:00</div>
                <div>11</div>
            </div>
        </div>
        <hr/>

        <div className={classes.row}>
            <div className={classes.oneLine}>
                <div>
                    <Avatar src={daiImage} alt="Danag Trip" className={classes.avatar}/>
                </div>
                <div>
                    <h3>Da Nang Trip!!</h3>
                    <div>Tien Vi</div>
                    <div>Added expenses</div>
                </div>
            </div>
            <div>
                <div className={classes.time}>16:00</div>
                <div>11</div>
            </div>
        </div>
        <hr/>

        <div className={classes.row}>
            <div className={classes.oneLine}>
                <div>
                    <Avatar src={hungImage} alt="Danag Trip" className={classes.avatar}/>
                </div>
                <div>
                    <h3>Da Nang Trip!!</h3>
                    <div>Tien Vi</div>
                    <div>Added expenses</div>
                </div>
            </div>
            <div>
                <div className={classes.time}>16:00</div>
                <div>11</div>
            </div>
        </div>
        <hr/>

    </div>
  );
}

GroupChat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupChat);