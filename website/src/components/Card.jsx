import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-tiger-transition';
import Button from './Button';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    maxHeight: '100%',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 32,
    paddingRight: 32,
    overflow: 'scroll'
  },
  divider: {
    marginTop: 32,
    marginBottom: 32
  },
  gridContainer: {
    '& .MuiGrid-item': {
      width: '100%'
    },
    // [theme.breakpoints.up('md')]: {
    //   minHeight: '100%',
    // },
  },
  title: {
    flexGrow: 0,
    paddingBottom: 24
  },
}));

const Card = ({
  title,
  link,
  linkText,
  children,
  ...other
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.gridContainer}
        container
        direction="column"
        alignItems="flex-start"
        justify="space-between"
      >
        <Grid item xs className={classes.title}>
          <Typography variant='h5' gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs>
          {children}
        </Grid>
        <Grid item xs>
          <Divider className={classes.divider}/>
          <Button
            variant='text'
            component={Link}
            to={link}
            transition='glide-left'
          >
            {linkText}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Card;
