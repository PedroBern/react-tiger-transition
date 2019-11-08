import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {
  Screen,
} from 'react-tiger-transition'

const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 48px)`,
    marginTop: 48,
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Examples = () => {
  const classes = useStyles();

  return (
    <Screen className={classes.screen}>

      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h2'>
          Coming soon
        </Typography>
      </Container>

    </Screen>
  )

}

export default Examples
