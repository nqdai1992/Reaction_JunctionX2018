import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Restaurant from '@material-ui/icons/Restaurant';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import choeImage from '../assets/anh-choe.jpg';
import daiImage from '../assets/anh-dai.jpg';
import hungImage from '../assets/hung-pic.jpg';
import quangImage from '../assets/anh-anh-quang.jpg';
import trungImage from '../assets/anh-anh-trung.jpg';
import Chip from '@material-ui/core/Chip'

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
    chip: {
      marginRight: 8,
      marginTop: 8,
    },
    bigAvatar: {
      width: 60,
      height: 60,
    },
  };

const GroupList = (props) => {
    const { classes } = props;

    return (
    <div className={classes.color}>
        <h1 style={{textAlign: "center", paddingTop: "20px"}}>MY GROUPS</h1>
        <Card className={classes.top}>
            <CardContent>
            <div>
                <div style={{marginBottom: "10px"}}>
                    <Icon><Restaurant></Restaurant></Icon>
                    <h2 style={{paddingLeft: '10px', display: 'inline'}}>Club Roman</h2>
                </div>
                <Chip avatar={<Avatar alt="anh cua Hung" src={hungImage} />}
                    label="Dang Hoang Hung" className={classes.chip}/>
                <Chip avatar={<Avatar alt="anh cua Choe" src={choeImage} />}
                    label="Thanh Mai" className={classes.chip}/>
                <Chip avatar={<Avatar alt="anh cua Dai" src={daiImage} />}
                    label="Nguyen Quoc Dai" className={classes.chip}/>
            </div>
            </CardContent>
        </Card>
        <Card className={classes.top}>
            <CardContent>
            <div style={{marginBottom: "10px"}}>
                    <Icon><DirectionsRun></DirectionsRun></Icon>
                    <h2 style={{paddingLeft: '10px', display: 'inline'}}>Sunday Funday Run</h2>
            </div>
                <Chip avatar={<Avatar alt="anh cua Hung" src={hungImage} />}
                    label="Dang Hoang Hung" className={classes.chip}/>
                <Chip avatar={<Avatar alt="anh cua anh Trung" src={trungImage} />}
                    label="Nguyen Minh Trung" className={classes.chip}/>
                <Chip avatar={<Avatar alt="anh cua anh Quang" src={quangImage} />}
                    label="Do Minh Quang" className={classes.chip}/>
            </CardContent>
        </Card>
    </div>
    );
}

GroupList.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(GroupList);