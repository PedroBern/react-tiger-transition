import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

// you need to import styles!
// one of:
// styles/main.css
// styles/main.min.css
import "react-tiger-transition/styles/main.min.css";

import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});

const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FAFAFA",
};

const pStyle = {
  fontFamily: "Arial",
  maxWidth: 400,
  textAlign: 'center',
  lineHeight: 1.5,
};

// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";

const Home = () => (
  <Screen style={{...screenStyle}}>
    <p style={{ ...pStyle }}>
    <Link to="/not-valid-route">
      Invalid route link
    </Link> will redirect to the default route.
    Chances are your app will not have an invalid link,
    but it is useful for cases where the user can reach
    your app by one. An invalid path is a path that is
    not match by any route children of navigation.
    </p>
  </Screen>
)

const DefaultRouteComponent = () => (
  <Screen style={{...screenStyle}}>
    <Link
      to='/'
      transition='glide-left'
    >
      Back to home page
    </Link>
  </Screen>
)

export default () => (
  <Router>
    <Navigation
      defaultRoute={ <Redirect to="/default-route" /> }
    >

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/default-route">
        <DefaultRouteComponent />
      </Route>

    </Navigation>
  </Router>
);
