import React, { useContext } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { indigo, amber } from '@material-ui/core/colors';


import { Screen, Link } from 'react-tiger-transition';

import { Button } from '../components'
import { DemoContext } from '../provider';

const useStyles = makeStyles({
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: props => props.a ? amber[500] : indigo[500]
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
    // backgroundColor: '#333'
  },
  button: {
    margin: 8,
    minWidth: 200,
  },
});

const getOpositeDirection = direction => (
  direction === 'left' ? 'right' :
  direction === 'top' ? 'bottom' :
  direction === 'bottom' ? 'top' :
  'left'
);

const DemoNext = ({a, b}) => {

  const classes = useStyles({a});

  const {
    tiger,
    args,
  } = useContext(DemoContext)

  const hasDirection = tiger.args.direction !== undefined;

  return (
    <Screen className={classes.screen}>

      <Paper className={classes.paper}>
        <Button
          className={classes.button}
          variant='contained'
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
          variant='outlined'
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


export default DemoNext;
