import React, { useContext, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import { AppBar, Tabs } from '../../components';
import { DemoContext } from './context';

import { Link } from 'react-tiger-transition';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
});

export const demoNavRoutePath = {
  path: '/demo/:tiger?',
  exact: true
};

const DemoNav = ({
  match,
  history
}) => {

  const classes = useStyles();

  const {
    tiger,
    tigers,
    updateTiger,
  } = useContext(DemoContext)

  useEffect(() => {
    if (match && match.params.tiger !== tiger.name){
      if (tigers.filter(t => t.name === match.params.tiger).length > 0){
        updateTiger(match.params.tiger);
      }
      else {
        history.push('/demo/glide')
      }
    };
  }, [])

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>

        <Tabs
          secondary
          value={match ? match.params.tiger : 'glide'}
          variant="scrollable"
          scrollButtons="auto"
          onChange={(event, value) => updateTiger(value)}
        >
          {tigers.map(t => (
            <Tab
              component={Link}
              key={t.name}
              label={t.name}
              value={t.name}
              to={`/demo/${t.name}`}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export default withRouter(DemoNav);
