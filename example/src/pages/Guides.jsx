import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {
  Screen,
} from 'react-tiger-transition'

const useStyles = makeStyles({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Guides = () => {
  const classes = useStyles();

  return (
    <Screen>

      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h2'>
          Coming soon
        </Typography>
      </Container>

    </Screen>
  )

}

export default Guides
