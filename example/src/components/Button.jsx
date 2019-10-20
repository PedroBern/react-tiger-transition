import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { color, gradient } from './themeColor';


const useStyles = makeStyles({
  root: {
    background: gradient
  },
  outlined: {
    borderColor: color,
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
  }
});

function MyButton(props) {
  const {variant, className, ...other} = props;
  const classes = useStyles();
  return (
    <Button
      className={classNames(classes.root, className)}
      variant={variant}
      classes={{
        outlined: classes.outlined
      }}
      {...other}
    />
  );
}

export default MyButton;
