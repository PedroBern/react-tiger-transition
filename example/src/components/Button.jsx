import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: props =>
      props.variant === 'contained'
        ? 'linear-gradient(120deg, rgba(247,192,111,1) 0%, rgba(212,137,75,1) 100%)'
        : 'transparent',
  },
  outlined: {
    borderColor: 'rgba(212,137,75,1)',
    color: 'rgba(212,137,75,1)'
  }
});

function MyButton(props) {
  const {variant, ...other} = props;
  const classes = useStyles(props);
  return (
    <Button
      className={classes.root}
      variant={variant}
      classes={{
        outlined: classes.outlined
      }}
      {...other}
    />
  );
}

export default MyButton;
