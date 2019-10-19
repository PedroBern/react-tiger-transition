import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
  colorPrimary: {
    color: 'black',
    background: 'linear-gradient(120deg, rgba(247,192,111,1) 0%, rgba(212,137,75,1) 100%)',
  }
});

function MyAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar
      classes={{
        colorPrimary: classes.colorPrimary
      }}
      {...props}
    />
  );
}

export default MyAppBar;
