import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { color, gradient } from '../style/theme';


const useStyles = makeStyles({
  root: {
    background: props => props.variant === 'outlined' ? 'none' : gradient
  },
  outlined: {
    borderColor: color,
    color: color,
  }
});

function MyButton(props) {
  const {variant, className, ...other} = props;
  const classes = useStyles({variant});
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
