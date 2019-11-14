import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, useLocation, useHistory } from "react-router-dom";

// you need to import styles!
// one of:
// styles/main.css
// styles/main.min.css
import "react-tiger-transition/styles/main.min.css";

import { Navigation, Route, Screen, Link, glide, fade } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});

fade({
  name: 'fade'
});

const routeStyle = {
  height: `calc(100% - 48px)`,
  top: 'auto',
  bottom: 0,
};

const screenStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fafafa",
  flexDirection: 'column'
};

const pStyle = {
  fontFamily: "Arial",
  maxWidth: 500,
  textAlign: 'center',
  lineHeight: 1.5,
};

const menuRouteStyle = {
  height: 48,
  top: 0,
}

// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";
document.body.style.backgroundColor = "black";

const P = ({children}) => <p style={{ ...pStyle }}>{children}</p>

const Home = () => {
  const location = useLocation();

  return (
    <Screen style={{...screenStyle}}>
      {location.state && location.state.referrer ?
        <P>
          <b>You were redirected from {location.state.referrer}</b>
        </P>
        :
        <P>
          Welcome!
        </P>
      }
      <P>
        <Link to="/not-valid-route" transition='glide-left'>
          Invalid route link
        </Link> will redirect to the default route.
        Chances are your app will not have an invalid link,
        but it is useful for cases where the user can reach
        your app by one. An invalid path is a path that is
        not match by any route children of navigation.
      </P>
      <P>
        <b>Try starting this example with any path you want!</b>
      </P>
    </Screen>
  )
};

const Menu = () => {

  return (
    <Screen style={{...screenStyle, backgroundColor: '#c8c8c8'}}>
      <P>
        This menu render together with default route because of the skip prop!
      </P>
    </Screen>
  )
}

const DefaultRouteComponent = () => {
  const [redirect, setRedirect] = useState(false);
  const [referrer, setReferrer] = useState(useLocation().pathname);

  useEffect(() => {
    setTimeout(() => setRedirect(true), 1000);
  }, []);

  useEffect(() => {
    if (redirect) alert(`
      The route you are looking for does not exist!
      You will be redirected to '/'.`
    );
  }, [redirect])

  return (
    <React.Fragment>
      <h1>Not Found: 404</h1>
      {redirect && (
        <Redirect
          to={{
            pathname: "/",
            state: { referrer }
          }}
        />
      )}
    </React.Fragment>
  )
};

const DefaultRouteWrapper = ({
  children,
  transitionProps
}) => {
  return (
    <Route
      transitionProps={transitionProps}
      containerProps={{style: {...routeStyle}}}
    >
      <Screen style={{ ...screenStyle }}>
        {children}
      </Screen>
    </Route>
  )
}

const CleanLocationState = () => {
  const history = useHistory();

  useEffect(() => {
      history.replace();
  }, [])

  return null;
}

export default () => (
  <Router>
    <Navigation
      defaultRoute={ <DefaultRouteComponent /> }
      DefaultRouteWrapper={ DefaultRouteWrapper }
      globalTransitionProps={{
        classNames: 'fade'
      }}
    >

      <Route
        path='/'
        // skip this path on computing if the path of this
        // route is matching or not.
        // allow to match together with the default route.
        skip
        containerProps={{
          style: { ...menuRouteStyle }
        }}
      >
        <Menu />
      </Route>

      <Route
        exact
        path="/"
        containerProps={{
          style: { ...routeStyle }
        }}
      >
        <Home />
      </Route>

      <CleanLocationState />

    </Navigation>
  </Router>
);
