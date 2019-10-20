import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import { Button, gradient } from '../components';

import {
  Screen,
  Link,
  glide,
} from 'react-tiger-transition'


const useStyles = makeStyles({
  container: {
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  h2: {
    lineHeight: 1.1,
    background: gradient,
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
  },
  outlined: {
    borderColor: 'white',
    color: 'white'
  }
});

const buttons = [
  {
    to: '/docs',
    text: 'Docs',
    variant: 'contained',
  },
  {
    to: '/demo',
    text: 'Demo',
    variant: 'contained',
  },
  {
    to: '/github',
    text: 'Github',
    variant: 'outlined',
    classes: true,
  }
]

const Home = props => {
  const classes = useStyles();

  return (
    <Screen className='home-screen'>

      <Container maxWidth='md' className={classes.container}>
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography
              variant='h2'
              color='primary'
              // className='tiger-gradient-text'
              classes={{
                h2: classes.h2
              }}
            >
              React Tiger Transition
            </Typography>
          </Grid>

          <Grid container spacing={4}>
            {buttons.map(b => (
              <Grid item key={b.text}>
                <Button
                  component={Link}
                  transition={glide}
                  size='large'
                  to={b.to}
                  variant={b.variant}

                >
                  {b.text}
                </Button>
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Container>

    </Screen>
  )

}

export default Home
