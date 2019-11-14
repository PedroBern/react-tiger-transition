import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route as RegularRoute
} from "react-router-dom";

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
  DocsNav,
  docsRoutePath,
  Examples,
  ExamplesNav,
  examplesRoutePath,
  Demo,
  DemoNext,
  DemoProvider,
  DemoNav,
  demoNavRoutePath,
} from './pages';

import {
  Nav,
  navRoutePath,
} from './components';

import { makeStyles, ThemeProvider } from '@material-ui/styles';

import './style/style.css';
import './style/markdown.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import { theme } from './style/theme';

const useStyles = makeStyles({
  nav: {
    zIndex: 200,
    top: 0,
    bottom: 'auto',
    height: 64,
  },
  scondaryNav: {
    zIndex: 100,
    top: 0,
    bottom: 'auto',
    height: 112,
  },
  route: {
    backgroundColor: '#fafafa',
  }
});

const basicNavConfig = {
  navClass: 'scondaryNav',
  zIndex: 100,
  transition: 'shuffle-secondary-bottom'
};

const navs = [
  {
    key: 'main',
    path: navRoutePath,
    component: <Nav />,
    navClass: 'nav',
    zIndex: 200,
    transition: 'shuffle-bottom'
  },
  {
    key: 'demo',
    path: demoNavRoutePath,
    component: <DemoNav />,
    ...basicNavConfig
  },
  {
    key: 'docs',
    path: docsRoutePath,
    component: <DocsNav />,
    ...basicNavConfig
  },
  {
    key: 'examples',
    path: examplesRoutePath,
    component: <ExamplesNav />,
    ...basicNavConfig
  }
]

const App = () => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/react-tiger-transition">
        <DemoProvider>
          <Navigation
            globalTransitionProps={{
              classNames: "fade"
            }}
          >

            <Route exact path="/">
              <Home />
            </Route>

            <Route {...docsRoutePath} className={classes.route}>
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

            <Route {...examplesRoutePath} className={classes.route}>
              <Examples />
            </Route>

            {navs.map(nav => (
              <Route
                key={nav.key || nav.path}
                {...nav.path}
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
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))
