import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  contained: {
    background: theme.custom.gradient,
  }
}));

function MyButton(props) {
  const classes = useStyles();
  return (
    <Button
      classes={{
        contained: classes.contained
      }}
      {...props}
    />
  );
}

export default MyButton;
