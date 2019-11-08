import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';


import { Button, gradient } from '../components';

import {
  Screen,
  Link,
  glide,
} from 'react-tiger-transition'


const useStyles = makeStyles({
  root: {
    backgroundColor: '#263238'
  },
  container: {
    height: '100%',
  },
  grid: {
    height: '100%',
    color: 'white',
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
    to: '/docs/quickstart',
    text: 'Docs',
    variant: 'contained',
  },
  {
    to: '/demo/glide',
    text: 'Demo',
    variant: 'contained',
  },
  {
    external: true,
    to: 'https://github.com/pedrobern/react-tiger-transition',
    text: 'Github',
    variant: 'outlined',
    classes: true,
  }
]

const Home = props => {
  const classes = useStyles();

  return (
    <Screen className={classes.root}>

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
              classes={{
                h2: classes.h2
              }}
            >
              React Tiger Transition
            </Typography>
            <Typography
              variant='subtitle1'
              color='inherit'
            >
            Page transitions for react router.
            </Typography>
          </Grid>

          <Grid container spacing={4}>
            {buttons.map(b => (
              <Grid item key={b.text}>
                {b.external ?
                  <Button
                    component={MuiLink}
                    size='large'
                    href={b.to}
                    variant={b.variant}
                  >
                    {b.text}
                  </Button>
                  :
                  <Button
                    component={Link}
                    transition="glide-left"
                    size='large'
                    to={b.to}
                    variant={b.variant}
                  >
                    {b.text}
                  </Button>
                }
              </Grid>
            ))}
          </Grid>

        </Grid>
      </Container>

    </Screen>
  )

}

export default Home
