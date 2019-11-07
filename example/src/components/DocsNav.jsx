import React, { useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';

import AppBar from './AppBar';
import Tabs from './Tabs';

import { docs, docsPaths } from '../utils';
import { Link, flip } from 'react-tiger-transition';


const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  tabsFlexContainer: {
    '@media (min-width: 960px)': {
      justifyContent: 'center',
    }
  },
});

const DocsNav = ({
  match,
  location,
  history,
}) => {

  const classes = useStyles();

  return (
    match && !docsPaths.includes(match.params.doc) ?
    <Redirect to='/docs/quickstart'/>
    :
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>

        <Tabs
          secondary
          value={match ? docsPaths.indexOf(match.params.doc) : 0}
          variant="scrollable"
          scrollButtons="auto"
          classes={{
            flexContainer: classes.tabsFlexContainer,
          }}
        >
          {docs.map((d, index) => (
            <Tab
              component={Link}
              key={d.path}
              to={d.path}
              transition={match && docsPaths.indexOf(match.params.doc) < index ?
                'flip-left' :
                'flip-right'
              }
              label={d.text}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export default withRouter(DocsNav);
