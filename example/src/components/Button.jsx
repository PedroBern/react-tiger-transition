import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import themeColor from './themeColor';


const useStyles = makeStyles({
  root: {
    background: props =>
      props.variant === 'contained'
        ? themeColor
        : 'transparent',
  },
  outlined: {
    borderColor: themeColor,
    color: themeColor
  }
});

function MyButton(props) {
  const {variant, className, ...other} = props;
  const classes = useStyles(props);
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
