# Navigation

The context provider for [`<Link />`](/docs/link). Allow link to change
transition on click, before the routing. This makes possible to build as
many different transitions for the same route as possible, all evaluated
on the fly.

You must provide at least one **direct** [`<Route />`](/docs/route) child
for `<Navigation />`.

## Props
### `containerProps`

Props passed to [`<Screen container />`](/docs/screen) (that wraps the
routes).

type: `object`


### `defaultRoute`

A route that matches when all routes do not. Default is
[`<Redirect to='/' />`](https://reacttraining.com/react-router/web/api/Redirect).

type: `element`
defaultValue: `<Redirect to='/' />`


### `defaultTransition`

The default transition to be consumed by every [`<Link />`](/docs/link)
component that transition prop is not defined. Good if you want the same
transition for all routes, or most of them. Use string if you have your
own css animation, or an object or function returning an object to be
passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).

type: `union(string|object|func)`
defaultValue: `fade`


### `disableDefaultRoute`

Disable default route.

type: `bool`
defaultValue: `false`


### `firstTimeout`

First transition timeout in milliseconds. Used only on appearing (if set),
and only if you are using a css transition. If you are using an object
or function returning an transition with timeout, this `firstTimeout` is
ignored.

type: `number`
defaultValue: `600`


### `globalTransitionProps`

Props passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
Usually you don't need to worry about this. If you pass `appear`, the
appearing animation is the `defaultTransition` prop, unless defined a
`forceTransition` prop in [`<Route>`](/docs/route).

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

<div id='root' style={{height: '100vh'}}>
  <Router>
    <Navigation>

      { MyRoutes }

    </Navigation>
  </Router>
</div>
```

