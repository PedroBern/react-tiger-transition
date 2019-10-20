import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
} from '@material-ui/core/colors';

import { Screen, Link } from 'react-tiger-transition';

import { Button } from '../components'
import { DemoContext } from '../provider';

const colors = [
  lime,
  red,
  blue,
  purple,
  deepOrange,
  grey,
  indigo,
  pink,
  brown,
  cyan,
  lightBlue,
  green,
  deepPurple,
  yellow,
  orange,
  amber,
  teal,
  blueGrey,
  lightGreen,
];

const useStyles = makeStyles({
  screen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: props => colors[props.color][500]
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
});

const getOpositeDirection = direction => (
  direction === 'left' ? 'right' :
  direction === 'top' ? 'bottom' :
  direction === 'bottom' ? 'top' :
  'left'
);

const changeAxis = direction => (
  direction === 'left' || direction === 'right' ? 'top' : 'left'
);


const DemoNext = ({a, b, location, ...other}) => {

  const { state } = location;

  const [localState, setLocalState] = useState(state && state.loop ? state : {loop: 0})

  const [to, setTo] = useState({
    pathname: `/demo-${a ? 'b' : 'a'}`,
    state: { loop: localState.loop + 1 < 19 ? localState.loop + 1 : 0},
  })

  const classes = useStyles({color: to.state.loop});

  const {
    tiger,
    args,
    onChangeFromObj
  } = useContext(DemoContext)

  const hasDirection = tiger.args.direction !== undefined;

  return (
    <Screen className={classes.screen}>

      <Paper className={classes.paper}>
        <Button
          className={classes.button}
          variant='contained'
          component={Link}
          to={to}
          transition={() => tiger.func({...args})}
        >
          Continue
        </Button>

        {hasDirection && (
          <React.Fragment>
            <Button
              className={classes.button}
              variant='contained'
              component={Link}
              to={to}
              transition={() => tiger.func({
                ...args,
                direction: getOpositeDirection(args.direction)
              })}
            >
              Turn around
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              component={Link}
              to={to}
              onClick={() => {
                const direction = changeAxis(args.direction)
                onChangeFromObj({...args, direction})
              }}
              transition={() => tiger.func({
                ...args,
                direction: changeAxis(args.direction)
              })}
            >
              Change axis
            </Button>
          </React.Fragment>
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


export default withRouter(DemoNext);
