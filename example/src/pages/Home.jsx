import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

import { Button } from '../components';

import {
  Screen,
  Link,
  glide,
} from 'react-tiger-transition'


const useStyles = makeStyles({
  // screen: {
    // background: 'linear-gradient(120deg, rgba(247,192,111,1) 0%, rgba(212,137,75,1) 100%)'
  // },
  container: {
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  tigerRoar: {
    borderRadius: '50%',
  },
  h2: {
    lineHeight: 1.1,
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
              className='tiger-gradient-text'
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
