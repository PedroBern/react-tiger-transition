import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Route, Navigation, fade, Screen } from 'react-tiger-transition';

import styles from '../../src/styles.css';

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
    zIndex: -1,
  },
  route: {
    height: `calc(100% - 48px)`, // because of the shared appbar between screens
    backgroundColor: 'white'
  }
});

const App = () => {

  const classes = useStyles();

  return (
    <Router>
      <DemoProvider>
        <Navigation

          // #docs.add
          //
          // ! CHROME BUG FOUND ! -> defaultTransition={glide}
          //
          // if the page have scroll:
          // appear transition with translate cause a bug,
          // scroll bars becomes unscrollable until any element of page get focus
          // user needs to press tab, but if the page havent a focusabe element
          // scroll is unreachable until open chrome dev tools and manually
          // toggle some css properties, then all becomes normal.
          // If start with translateX(50%), scroll works only when
          // mouse is over half of page, other half doesn't respond.
          // not a bug if is not appearing, like on regular transitions.
          // Works as expected on firefox.
          // Workaround for now is not to use defaultTransition that use
          // any kind of translate. Recommend a simple fade.

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
          />

        </Navigation>
      </DemoProvider>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'))
