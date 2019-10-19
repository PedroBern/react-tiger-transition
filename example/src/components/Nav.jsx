import React from 'react';
import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';

import AppBar from './AppBar';
import Tabs from './Tabs';

import { Screen, Link, glide } from 'react-tiger-transition';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  tabsFlexContainer: {
    justifyContent: 'center',
  },
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
    path: '/guides',
    text: 'guides',
  },
  {
    path: '/github',
    text: 'github',
  },
]

const pathsAbs = ['/', '/docs', '/demo', '/guides']

const Nav = ({match, location, history}) => {

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>
        <Tabs
          value={
            match ?
              match.path.indexOf('demo') > -1 ?
              pathsAbs.indexOf('/demo') :
              pathsAbs.indexOf(match.path)
            : 0
          }
          textColor="inherit"
          indicatorTop
          classes={{
            flexContainer: classes.tabsFlexContainer,
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
    </AppBar>
  )
}

export default withRouter(Nav);
