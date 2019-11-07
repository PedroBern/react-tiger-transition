import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// you need to import styles!
// one of:
// styles/main.css
// styles/main.min.css
import "react-tiger-transition/styles/main.min.css"; // eslint-disable-line

import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

// basic styling
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

export default () => {
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
            <Link to="/a" transition='glide-left' style={{ ...linkStyle }}>
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
            transition='glide-right'
            style={{ ...linkStyle }}
          >
            Back to home page
          </Link>
        </Route>
      </Navigation>
    </Router>
  );
};
