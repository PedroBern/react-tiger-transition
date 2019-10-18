import React, { useContext } from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { Screen, Link } from 'react-tiger-transition';

import { DemoContext } from '../provider';

const useStyles = makeStyles({
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  paper: {
    display: 'inherit',
    justifyContent: 'inherit',
    alignItems: 'inherit',
    flexDirection: 'inherit',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 40,
    paddingRight: 40,
  },
  button: {
    margin: 8,
    minWidth: 200,
  },
  a: {
    // backgroundColor: 'yellow',
    background: 'linear-gradient(45deg, orange 30%, yellow 90%)',
  },
  b: {
    // backgroundColor: 'blue',
    background: 'linear-gradient(45deg, darkBlue 30%, blue 90%)',
  }
});

const getOpositeDirection = direction => (
  direction === 'left' ? 'right' :
  direction === 'top' ? 'bottom' :
  direction === 'bottom' ? 'top' :
  'left'
);

const DemoA = ({a, b}) => {

  const classes = useStyles();

  const {
    tiger,
    args,
  } = useContext(DemoContext)

  const hasDirection = tiger.raw.indexOf('direction') > -1;

  return (
    <Screen className={classNames(classes.screen, a ? classes.a : classes.b)}>

      <Paper className={classes.paper}>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          component={Link}
          to={`/demo-${a ? 'b' : 'a'}`}
          transition={() => tiger.func({...args})}
        >
          Continue
        </Button>

        {hasDirection && (
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            component={Link}
            to={`/demo-${a ? 'b' : 'a'}`}
            transition={() => tiger.func({
              ...args,
              direction: getOpositeDirection(args.direction)
            })}
          >
            Turn around
          </Button>
        )}

        <Button
          className={classes.button}
          variant='contained'
          // color='secondary'
          component={Link}
          to='/demo'
          transition={() => (
            hasDirection ? tiger.func({
              ...args,
              direction: getOpositeDirection(args.direction)
            }) :
            tiger.func({...args})
          )}
        >
          Back to settings
        </Button>
      </Paper>

    </Screen>
  )
}


export default DemoA;
