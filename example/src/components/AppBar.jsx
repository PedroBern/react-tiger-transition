import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import themeColor from './themeColor';

const useStyles = makeStyles({
  colorPrimary: {
    color: 'black',
    backgroundColor: themeColor
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
