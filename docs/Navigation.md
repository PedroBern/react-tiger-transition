# Navigation

Route uses the original
[react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
It wraps the children with a transition component based on
`<Transition />` and `<CSSTransition />` from
[react-transition-group](https://github.com/reactjs/react-transition-group).

Must be used inside [`<Navigation />`](/navigation) to consume context.

Comes with some default css class that you can disable or chain with
your custom classes.

## Props
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


### `disableRootStyle`

Disable default style applied to root node.

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


### `rootNodeId`

Root node id, used to apply style to it.

type: `string`
defaultValue: `'root'`



## Example
```javascript
import { BrowserRouter as Router} from "react-router-dom";

import {
  Navigation, // Route needs context from Navigation
  Route,
  Screen,
  Link,
} from "react-tiger-transition";

// Don't forget to import styles!
import "react-tiger-transition/style.css";

...
<div id='root'>
  <Router>
    <Navigation>
      <Route exact path="/a" >
        <Screen>
          ... my page component goes here ...
          ... here is where I use <Link /> ...
        </Screen>
      </Route>

      ... more routes ...

    </Navigation>
  </Router>
</div>
...
```

\*Refer to [transitions API](transitions), for more details about transitions.
