import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Navigation, Screen, shuffle, fade } from 'react-tiger-transition';

import styles from 'react-tiger-transition/lib/styles.css';

import { Home, Docs, Demo, DemoNext, Guides } from './pages';

import { Nav } from './components';

import { DemoProvider } from './provider';

import { makeStyles } from '@material-ui/styles';

import './style.css';
import './markdown.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const useStyles = makeStyles({
  nav: {
    zIndex: 3,
    bottom: 0,
    top: 'auto',
    height: 56,
  },
  route: {
    backgroundColor: '#fafafa',
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <Router basename="/react-tiger-transition">
      <DemoProvider>
        <Navigation
          defaultTransition={() => fade({duration: 800, easing: 'ease-out'})}
          globalTransitionProps={{appear: true}}
        >

          <Route exact path="/" children={<Home />} />
          <Route exact path="/docs/:doc?" children={<Docs />} className={classes.route}/>
          <Route exact path="/demo" children={<Demo />} className={classes.route}/>
          <Route exact path="/demo-a" children={<DemoNext a />} />
          <Route exact path="/demo-b" children={<DemoNext b />} />
          <Route exact path="/guides" children={<Guides />} className={classes.route}/>
          <Route
            path={['/docs', '/demo', '/guides']}
            className={classes.nav}
            children={<Nav />}
            forceTransition={shuffle}
          />

        </Navigation>
      </DemoProvider>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))
