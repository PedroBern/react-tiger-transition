# Quick start

`react-tiger-transition` is a small package ready to transform your cutty cat navigation
into a wild tiger.

- Zero dependencies.
- Based on [react-transition-group](https://github.com/reactjs/react-transition-group) and [react-router-dom](https://github.com/ReactTraining/react-router).
- Inspired by [react-router-transition](https://github.com/maisano/react-router-transition) and [this transitions collection](https://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/).

## Installation

`npm i react-tiger-transition`

You need to install peerDependencies:

`npm i react-router-dom react-transition-group`

## Basic Example

After installation, copy the code below and paste on your react
project root to play.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";

import {
  Navigation,
  Route,
  Screen,
  Link,
  glide
} from 'react-tiger-transition';

// basic styling to not hurt eyes
const linkStyle = {
  fontSize: 30,
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Arial',
};

const screenStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const App = () => {

  // you will need to set the height of  <Navigation /> wrapper,
  // in this case, it is the root node,
  // you'd probably want to do this on a different way.
  document.getElementById('root').style.height = '100vh';

  return (
    <Router>{/* BrowserRouter from react-router-dom */}

      {/* Context provider for transitions */}
      <Navigation>

          {/* Use Route the same way you use
              react-router Route with children */}
          <Route exact path="/" >

            {/* Screen is just a div container
                with some basic style */}
            <Screen
              style={{
                backgroundColor: '#4EDC9F',
                ...screenStyle
              }}
            >

              {/* Use Link the same way you use
                  react-router Link, but
                  add transition */}
              <Link
                to='/a'
                transition={glide}
                style={{...linkStyle}}
              >
                Check out the page A
              </Link>
            </Screen>
          </Route>

          <Route
            exact
            path="/a"
            screen  // shorthand to wrap children with screen
            screenProps={{
              style: {
                backgroundColor: '#D4429F',
                ...screenStyle
              }
            }}
          >
            <Link
              to='/'
              transition={() => glide({direction: 'right'})}
              style={{...linkStyle}}
            >
              Back to home page
            </Link>
          </Route>

      </Navigation>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

```

[Keep reading!](/docs/navigation)
