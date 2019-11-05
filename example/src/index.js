// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom";
//
// import {
//   Route,
//   Navigation,
//   Screen,
//   // flip,
//   flip
// } from 'react-tiger-transition';
//
// import "react-tiger-transition/styles/main.min.css";
//
// import "./registerTransitions";
//
// import { Home, Docs, Demo, DemoNext, Guides } from './pages';
// import { Nav, DemoNav, DocsNav } from './components';
// import { DemoProvider } from './provider';
//
// import { makeStyles } from '@material-ui/styles';
//
// import './style.css';
// import './markdown.css';
// import './transitions.css';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
//
// const useStyles = makeStyles({
//   nav: {
//     zIndex: 200,
//     top: 0,
//     bottom: 'auto',
//     height: 48,
//   },
//   scondaryNav: {
//     zIndex: 100,
//     top: 0,
//     bottom: 'auto',
//     height: 96,
//   },
//   route: {
//     backgroundColor: '#fafafa',
//   }
// });
//
// const navs = [
//   {
//     key: 'main',
//     path: ['/docs', '/demo', '/guides'],
//     component: <Nav />,
//     navClass: 'nav',
//     zIndex: 200,
//     transition: 'flip-bottom'
//   },
//   {
//     key: 'demo',
//     path: '/demo',
//     component: <DemoNav />,
//     navClass: 'scondaryNav',
//     zIndex: 100,
//     transition: 'flip-secondary-bottom'
//   },
//   {
//     key: 'docs',
//     path: '/docs/:doc?',
//     component: <DocsNav />,
//     navClass: 'scondaryNav',
//     zIndex: 100,
//     transition: 'flip-secondary-bottom'
//   }
// ]
//
// const App = () => {
//
//   const classes = useStyles();
//
//   return (
//     <Router basename="/react-tiger-transition">
//       <DemoProvider>
//         <Navigation
//           defaultTransition={flip}
//           globalTransitionProps={{
//             appear: true,
//           }}
//         >
//
//           <Route exact path="/" >
//             <Home />
//           </Route>
//
//           <Route exact path="/docs/:doc?" className={classes.route}>
//             <Docs />
//           </Route>
//
//           <Route exact path="/demo" className={classes.route}>
//             <Demo />
//           </Route>
//
//           <Route exact path="/demo-a">
//             <DemoNext a />
//           </Route>
//
//           <Route exact path="/demo-b">
//             <DemoNext b />
//           </Route>
//
//           <Route exact path="/guides" className={classes.route}>
//             <Guides />
//           </Route>
//
//           {navs.map(nav => (
//             <Route
//               key={nav.key || nav.path}
//               path={nav.path}
//               className={classes[nav.navClass]}
//               forceTransition={nav.transition}
//               // forceTransition={() => flip({
//               //   direction: 'bottom',
//               //   duration: 500,
//               //   opacity: 1,
//               //   zIndex: nav.zIndex,
//               //   delay: nav.key ? 0 : 100,
//               //   easing: 'easeOutCubic'
//               // })}
//             >
//               {nav.component}
//             </Route>
//           ))}
//
//         </Navigation>
//       </DemoProvider>
//     </Router>
//   )
// };


import ReactDOM from 'react-dom';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// you need to import styles!
// one of:
// styles/main.css
// styles/main.min.css
import "react-tiger-transition/styles/main.min.css"; // eslint-disable-line

import { Navigation, Route, Screen, Link } from "react-tiger-transition";

import { glueOut } from 'react-tiger-transition/tigers';

glueOut({
  name: 'tiger',
});

// basic styling to not hurt eyes
const linkStyle = {
  fontSize: 30,
  textDecoration: "none",
  color: "black",
  fontFamily: "Arial"
};

const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const App = () => {
  // you will need to set the height of  <Navigation /> wrapper,
  // in this case, it is the root node,
  // you'd probably want to do this on a different way.
  document.getElementById("root").style.height = "100vh";

  return (
    <Router>
      {/* BrowserRouter from react-router-dom */}

      {/* Context provider for transitions */}
      <Navigation>
        {/* Use Route the same way you use
              react-router Route with children */}
        <Route exact path="/">
          {/* Screen is just a div container
                with some basic style */}
          <Screen
            style={{
              backgroundColor: "#4EDC9F",
              ...screenStyle
            }}
          >
            {/* Use Link the same way you use
                  react-router Link, but
                  add transition */}
            <Link to="/a" transition='tiger' timeout={600} style={{ ...linkStyle }}>
              Check out the page A
            </Link>
          </Screen>
        </Route>

        <Route
          exact
          path="/a"
          screen // shorthand to wrap children with screen
          screenProps={{
            style: {
              backgroundColor: "#D4429F",
              ...screenStyle
            }
          }}
        >
          <Link
            to="/"
            transition='tiger'
            timeout={600}
            style={{ ...linkStyle }}
          >
            Back to home page
          </Link>
        </Route>
      </Navigation>
    </Router>
  );
};


ReactDOM.render(<App />, document.getElementById('root'))
