# Route

Route uses the original
[react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
It wraps the children with a transition component based on
`<Transition />` and `<CSSTransition />` from
[react-transition-group](https://github.com/reactjs/react-transition-group).

Must be used inside [`<Navigation />`](/navigation) to consume context.

Comes with some default css class that you can disable or chain with
your custom classes.

## Props
### `children` (required)

Propably your 'page' component. I recommend you to use <Screen />
to wrap your pages.

type: `union(func|node)`


### `className`

Div container className. A string or a function returning a string.
If not disableStyle, this className will be chained to
'react-tiger-transition--route'.

type: `union(string|func)`


### `containerProps`

Props passed to div container.

type: `object`


### `disableStyle`

Disable default styles applied to div container. You can
still use className to set your own styles.

type: `bool`
defaultValue: `false`


### `timeout`

Transition timeout in milliseconds. Used only on CSS transitions.
If using an object or a function for 'transition' prop from
<Link />, should return the
timeout there.

type: `number`
defaultValue: `600`


### `transitionProps`

Props passed to `<Transition />` or `<CSSTransition />` from
[react-transition-group](https://github.com/reactjs/react-transition-group).
Usually you don't need to worry about this.
If you pass `appear={true}`, the appearing animation is the default one defined
in `<Navigation />`. Props defined here have higher priority than
globalTransitionProps defined in `<Navigation />`.

type: `object`


\*Any other prop is passed to
[react router `<Route />`](https://reacttraining.com/react-router/web/api/Route).

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
...
```

\*Refer to [transitions API](transitions), for more details about transitions.
