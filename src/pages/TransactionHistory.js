import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import AttachMoney from '@material-ui/icons/AttachMoney';
import LocalAtm from '@material-ui/icons/LocalAtm';
import MoneyOff from '@material-ui/icons/MoneyOff';
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: 30,
  },
  time: {
    width: 150
  },
  spend: {
    display: 'block',
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
  },
  title: {
    fontSize: 14,
  },
});

const TransactionHistory = (props) => {
    const { classes } = props;

    return (
    <div style={{color: 'black', marginTop: '30px', paddingBottom: '60px'}}>
        <h2 style={{marginLeft: '30px'}}>Transaction History</h2>

        <Card className={classes.card}>
            <CardContent className={classes.row}>
                <div>
                    <Chip label="lending" className={classes.chip}/>
                    <div className={classes.row} style={{justifyContent: 'flex-start'}}>
                        <Icon>
                            <AttachMoney></AttachMoney>
                        </Icon>
                        <h3>For friends</h3>
                    </div>
                    <div className={classes.time}>Saturday, 13-Oct-18 07:41:10 UTC</div>
                </div>
                <div>10.000.000 vnd</div>
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardContent className={classes.row}>
                <div>
                    <Chip label="spending" className={classes.chip}/>
                    <div className={classes.row} style={{justifyContent: 'flex-start'}}>
                        <Icon>
                            <LocalAtm></LocalAtm>
                        </Icon>
                        <h3>Eating out</h3>
                    </div>
                    <div className={classes.time}>Sunday, 14-Oct-18 05:10:33 UTC</div>
                </div>
                <div>6.000.000 vnd</div>
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardContent className={classes.row}>
                <div>
                    <Chip label="borrowing" className={classes.chip}/>
                    <div className={classes.row} style={{justifyContent: 'flex-start'}}>
                        <Icon>
                            <MoneyOff></MoneyOff>
                        </Icon>
                        <h3>From sis</h3>
                    </div>
                    <div className={classes.time}>Monday, 15-Oct-18 03:22:10 UTC</div>
                </div>
                <div>3.000.000 vnd</div>
            </CardContent>
        </Card>
    </div>
  );
}

TransactionHistory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionHistory);