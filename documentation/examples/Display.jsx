import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "react-tiger-transition/styles/main.min.css";

import {
  Navigation,
  Route,
  Screen,
  Link,
  glide,
  cube
} from "react-tiger-transition";

glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});
cube({
  name: 'cube-left',
});


const linkStyle = {
  fontSize: 18,
  fontFamily: "Arial"
};

const screenStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#FAFAFA",
};

const displayStyle = {
  margin: 10,
  height: 200,
  width: 200,
  borderColor: "black"
};

const pStyle = {
  fontFamily: "Arial",
  maxWidth: 300,
  textAlign: 'center'
};

const linksContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: 200,
  justifyContent: "space-around"
};

const displayScreens = [
  {
    key: "A",
    path: "/display/a",
    color: "blue"
  },
  {
    key: "B",
    path: "/display/b",
    color: "green"
  },
  {
    key: "C",
    path: "/display/c",
    color: "red"
  }
];

// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";
// just to make opacity goes black on glide transition
document.body.style.backgroundColor = 'black';

export default () => (
  <Router>
    <Navigation>

      <Route exact path="/">
        <Screen style={{ ...screenStyle }}>
          <Link
            to="/display/a"
            transition='glide-left'
            style={{ ...linkStyle }}
          >
            Check out the display!
          </Link>
          <p style={{...pStyle}}>
            Note how the display will not transition
            when arriving the next route.
          </p>
        </Screen>
      </Route>

      <Route path="/display/:id">
        <Screen style={{ ...screenStyle }}>
          <Screen display style={{ ...displayStyle }}>
            {displayScreens.map(d => (
              <Route
                key={d.key}
                exact
                path={d.path}
                screen
                screenProps={{
                  style: {
                    ...screenStyle,
                    backgroundColor: d.color
                  }
                }}
              >
                <h1>{d.key}</h1>
              </Route>
            ))}
          </Screen>
          <div style={{ ...linksContainer }}>
            {displayScreens.map(d => (
              <Link
                key={d.key}
                to={d.path}
                style={{ ...linkStyle }}
                transition='cube-left'
              >
                <p>{d.key}</p>
              </Link>
            ))}
          </div>
          <Link
            to="/"
            transition="glide-right"
            style={{ ...linkStyle }}
          >
            Back to home page
          </Link>
          <p style={{ ...pStyle }}>
            Note how the display will not transition
            when leaving this route.
          </p>
        </Screen>
      </Route>

    </Navigation>
  </Router>
);
