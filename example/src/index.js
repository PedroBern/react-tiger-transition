import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import {
  Route,
  Navigation,
  Screen,
  shuffle,
  fade
} from 'react-tiger-transition';

import "react-tiger-transition/styles/main.min.css";

import { Home, Docs, Demo, DemoNext, Guides } from './pages';
import { Nav, DemoNav, DocsNav } from './components';
import { DemoProvider } from './provider';

import { makeStyles } from '@material-ui/styles';

import './style.css';
import './markdown.css';
import './transitions.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const useStyles = makeStyles({
  nav: {
    zIndex: 200,
    top: 0,
    bottom: 'auto',
    height: 48,
  },
  scondaryNav: {
    zIndex: 100,
    top: 0,
    bottom: 'auto',
    height: 96,
  },
  route: {
    backgroundColor: '#fafafa',
  }
});

const navs = [
  {
    key: 'main',
    path: ['/docs', '/demo', '/guides'],
    component: <Nav />,
    navClass: 'nav',
    zIndex: 200,
  },
  {
    path: '/demo',
    component: <DemoNav />,
    navClass: 'scondaryNav',
    zIndex: 100,
  },
  {
    path: '/docs/:doc?',
    component: <DocsNav />,
    navClass: 'scondaryNav',
    zIndex: 100,
  }
]

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/react-tiger-transition">
      <DemoProvider>
        <Navigation
          defaultTransition={fade}
          globalTransitionProps={{
            appear: true,
          }}
        >

          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/docs/:doc?" className={classes.route}>
            <Docs />
          </Route>

          <Route exact path="/demo" className={classes.route}>
            <Demo />
          </Route>

          <Route exact path="/demo-a">
            <DemoNext a />
          </Route>

          <Route exact path="/demo-b">
            <DemoNext b />
          </Route>

          <Route exact path="/guides" className={classes.route}>
            <Guides />
          </Route>

          {navs.map(nav => (
            <Route
              key={nav.key || nav.path}
              path={nav.path}
              className={classes[nav.navClass]}
              forceTransition={
                nav.key ? "shuffle-bottom" : "shuffle-bottom-secondary"
              }
              transitionProps={{
                timeout: 600
              }}
              // forceTransition={() => shuffle({
              //   direction: 'bottom',
              //   duration: 500,
              //   opacity: 1,
              //   zIndex: nav.zIndex,
              //   delay: nav.key ? 0 : 100,
              //   easing: 'easeOutCubic'
              // })}
            >
              {nav.component}
            </Route>
          ))}

        </Navigation>
      </DemoProvider>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))
