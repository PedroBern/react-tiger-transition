import React from 'react';
import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import MuiAppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { Screen, Link, glide } from 'react-tiger-transition';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  tabsFlexContainer: {
    justifyContent: 'center',
  },
  indicator: {
    top: 0,
  }
});

const paths = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/docs',
    text: 'docs',
  },
  {
    path: path => path.indexOf('demo') !== -1 ? path : '/demo',
    text: 'demo',
  },
  {
    path: '/github',
    text: 'github',
  },
]

const pathsAbs = ['/', '/docs', '/demo']

const AppBar = ({match, location, history}) => {

  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" color="default" className={classes.appBar}>
      <Container maxWidth='lg'>
        <Tabs
          value={
            match ?
              match.path.indexOf('demo') > -1 ?
              pathsAbs.indexOf('/demo') :
              pathsAbs.indexOf(match.path)
            : 0
          }
          indicatorColor="secondary"
          textColor="primary"
          classes={{
            flexContainer: classes.tabsFlexContainer,
            indicator: classes.indicator,
          }}
        >
          {paths.map((p, index) => (
            <Tab
              component={Link}
              key={p.text}
              to={
                typeof p.path === 'function' ?
                match ? p.path(match.path) : '/demo' :
                p.path
              }
              transition={() => glide({
                direction: pathsAbs.indexOf(match.path) < index ?
                'left' :
                'right',
              })}
              label={p.text}
            />
          ))}
        </Tabs>
      </Container>
    </MuiAppBar>
  )
}

export default withRouter(AppBar);
