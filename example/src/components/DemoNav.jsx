import React, { useContext } from 'react';
import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';

import AppBar from './AppBar';
import Tabs from './Tabs';
import { DemoContext } from '../provider';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
});

const DemoNav = () => {

  const classes = useStyles();

  const {
    tiger,
    tigers,
    updateTiger,
  } = useContext(DemoContext)

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>

        <Tabs
          secondary
          value={tiger.name}
          variant="scrollable"
          scrollButtons="auto"
          onChange={(event, value) => updateTiger(value)}
        >
          {tigers.map(t => (
            <Tab
              key={t.name}
              label={t.name}
              value={t.name}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export default DemoNav;
