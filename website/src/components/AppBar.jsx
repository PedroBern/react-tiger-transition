import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { gradient, color, colorSecondary } from '../style/theme';

const useStyles = makeStyles(theme => ({
  colorPrimary: {
    color: 'black',
    background: theme.custom.gradient
  },
  colorSecondary: {
    color: theme.custom.color,
    backgroundColor: theme.custom.colorSecondary,
  }
}));

function MyAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar
      classes={{
        colorPrimary: classes.colorPrimary,
        colorSecondary: classes.colorSecondary
      }}
      {...props}
    />
  );
}

export default MyAppBar;
