import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  text: {
    paddingBottom: 24
  }
}));

const DemoCardContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography gutterBottom className={classes.text}>
        More than 20 different built-in transitions to use (the tigers!).
        Use the default values or customize each of them.
      </Typography>
      <img
        style={{width: '100%', height: 'auto'}}
        alt='Demo gif'
        src='https://github.com/PedroBern/react-tiger-transition/raw/master/demo.gif'
      />
    </React.Fragment>
  )
};

export default DemoCardContent;
