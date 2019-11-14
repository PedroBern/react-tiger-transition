# Navigation

The context provider for [`<Link />`](/docs/link). Allow link to change
transition on click, before the routing. This makes possible to build as
many different transitions for the same route as possible, all evaluated
on the fly.

## Props
### `DefaultRouteWrapper`

type: `elementType`
defaultValue: `({
  transitionProps, // eslint-disable-line react/prop-types
  children // eslint-disable-line react/prop-types
}) => (
  <Route screen transitionProps={transitionProps}>
    {children}
  </Route>
)`


The children wrapper of the route that matches when all routes do not.
Default is:

```javascript
const DefaultRouteWrapper = ({
   transitionProps,
   children
}) => (
   <Route screen transitionProps={transitionProps}>
      {children}  // defaultRoute is the children
   </Route>
);
```

 The `defaultRoute` prop is the children. Good when you want a customized
 not found 404 page.

 The transitionProps will pass the correct in state for [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).


### `containerProps`

type: `object`


Props passed to [`<Screen container />`](/docs/screen) (that wraps the
routes).

```javascript
<Navigation
   containerProps={{
     className: 'my-custom-class-name'
   }}
>
   ...
</Navigation>
```


### `defaultRoute`

type: `element`
defaultValue: `<Redirect to='/' />`


The children of the route that matches when all routes do not. Default is
[`<Redirect to='/' />`](https://reacttraining.com/react-router/web/api/Redirect).

```javascript
<Navigation defaultRoute={<Redirect to='/home' />}>...</Navigation>
```


### `disableDefaultRoute`

type: `bool`
defaultValue: `false`


Disable default route.


### `globalTransitionProps`

type: `object`
defaultValue: `{
  unmountOnExit: true,
  timeout: 600,
}`


Default props passed to all [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).

Use it to define a default transition:

```javascript
<Navigation
   globalTransitionProps={{
     ...props,
     timeout: 600,
     classNames: 'fade'
   }}
>
   ...
</Navigation>
```

`transitionProps` defined in [`<Route>`](/docs/route) have higher priority.




