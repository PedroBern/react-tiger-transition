import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    background: props => props.variant === 'contained'
      ? theme.custom.gradient : 'none',
  },
  outlined: {
    borderColor: theme.custom.color,
    color: theme.custom.color,
  }
}));

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
