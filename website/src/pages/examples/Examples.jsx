import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { assets, examplesPaths } from './assets';
import Container from '@material-ui/core/Container';
import { Screen, Route } from 'react-tiger-transition';
import { SandboxExample } from '../../components';

const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 48px)`,
    top: 48,
  },
});

const Examples = () => {
  const classes = useStyles();

  return (
    <Screen className={classes.screen}>

      <Screen display>
        {assets.map(example => (
          <Route
            className={classes.screen}
            screen
            key={example.label}
            path={example.path}
          >

            <SandboxExample
              path={example.src}
              label={example.label}
              dependencies={example.dependencies || {}}
            />

          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default Examples
