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

  const {
    tiger,
    args,
    timeout,
  } = useContext(DemoContext)

  const [to, setTo] = useState({
    pathname: `/demo/${tiger.name}/${a ? 'b' : 'a'}`,
    state: { loop: localState.loop + 1 < 19 ? localState.loop + 1 : 0},
  })

  const classes = useStyles({color: to.state.loop});

  const hasDirection = tiger.args.direction !== undefined;

  return (
    <Screen className={classes.screen}>

      <Paper className={classes.paper}>

        {!hasDirection ?

          <Button
            className={classes.button}
            variant='contained'
            component={Link}
            to={to}
            transition={`${tiger.name}-demo`}
            timeout={timeout}
          >
            Continue
          </Button>

          :

          <React.Fragment>
            {['left', 'right', 'top', 'bottom'].map(direction => (
              <Button
                key={direction}
                className={classes.button}
                variant='contained'
                component={Link}
                to={to}
                onClick={() => tiger.func({
                  name: `${tiger.name}-demo`,
                  ...args,
                  direction: direction
                })}
                transition={`${tiger.name}-demo`}
                timeout={timeout}
              >
                {direction}
              </Button>
            ))}
          </React.Fragment>
        }

        <Button
          className={classes.button}
          variant='outlined'
          component={Link}
          to={`/demo/${tiger.name}`}
          transition={`${tiger.name}-demo`}
          timeout={timeout}
        >
          Back to settings
        </Button>
      </Paper>

    </Screen>
  )
}


export default withRouter(DemoNext);
