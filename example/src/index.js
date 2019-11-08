import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import {
  Route,
  Navigation,
  Screen,
} from 'react-tiger-transition';

import "react-tiger-transition/styles/main.min.css";

import "./registerTransitions";

import {
  Home,
  Docs,
  Demo,
  DemoNext,
  Guides
} from './pages';

import {
  Nav,
  DemoNav,
  DocsNav
} from './components';

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
    path: ['/docs/:doc?', '/demo/:tiger', '/guides'],
    component: <Nav />,
    navClass: 'nav',
    zIndex: 200,
    transition: 'shuffle-bottom'
  },
  {
    key: 'demo',
    path: '/demo/:tiger',
    component: <DemoNav />,
    navClass: 'scondaryNav',
    zIndex: 100,
    transition: 'shuffle-secondary-bottom'
  },
  {
    key: 'docs',
    path: '/docs/:doc?',
    component: <DocsNav />,
    navClass: 'scondaryNav',
    zIndex: 100,
    transition: 'shuffle-secondary-bottom'
  }
]

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/react-tiger-transition">
      <DemoProvider>
        <Navigation
          globalTransitionProps={{
            classNames: "fade"
          }}
        >

          <Route exact path="/" >
            <Home />
          </Route>

          <Route exact path="/docs/:doc?" className={classes.route}>
            <Docs />
          </Route>

          <Route exact path="/demo/:tiger" className={classes.route}>
            <Demo />
          </Route>

          <Route exact path="/demo/:tiger/a">
            <DemoNext a />
          </Route>

          <Route exact path="/demo/:tiger/b">
            <DemoNext b />
          </Route>

          <Route exact path="/guides" className={classes.route}>
            <Guides />
          </Route>

          {navs.map(nav => (
            <Route
              exact
              key={nav.key || nav.path}
              path={nav.path}
              className={classes[nav.navClass]}
              transitionProps={{
                classNames: nav.transition,
              }}
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
