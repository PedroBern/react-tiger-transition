# Navigation

The context provider for `<Link />`. Allow link to change transition on
click, before the routing. This makes possible to build as many different
transitions for the same route as possible, all evaluated on the fly.

## Props
### `className`

Div container className. A string or a function returning a string.
If not disableStyle, this className will be chained to
'react-tiger-transition--container'.

type: `union(string|func)`


### `defaultRoute`

A route that matches when all routes do not. Default is
Redirect component from react-router-dom.

type: `element`
defaultValue: `<Redirect to='/' />`


### `defaultTransition`

The default transition to be consumed by every `<Link />` component that
transition prop is not specified. Good if you want the same transition for
all routes, or most of them. Use string if you have your own css animation,
or an object or function returning an object to be passed to <Transition />
component from react-transition-group.

type: `union(string|object|func)`
defaultValue: `fade`


### `disableBodyStyle`

Disable default style applied to body.

type: `bool`
defaultValue: `false`


### `disableStyle`

Disable default style applied to container.

type: `bool`
defaultValue: `false`


### `globalTransitionProps`

Props passed to `<Transition />` or `<CSSTransition />` from
[react-transition-group](https://github.com/reactjs/react-transition-group).
Usually you don't need to worry about this.
If you pass `appear={true}`, the appearing animation is the defaultTransition
prop.

type: `object`
defaultValue: `{}`



## Example
```javascript
import { BrowserRouter as Router} from "react-router-dom";

import {
  Navigation,
  Route,
  Screen,
  Link,
} from "react-tiger-transition";

// Don't forget to import styles!
import "react-tiger-transition/style.css";

...
<div id='root' style={{height: '100vh'}}>
  <Router>
    <Navigation>

      ... my routes ...

    </Navigation>
  </Router>
</div>
...
```

