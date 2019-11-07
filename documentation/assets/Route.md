# Route

Route uses the original
[react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
It wraps the children with a transition component based on
[`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
   and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).

Must be used inside [`<Navigation />`](/docs/navigation) to allow [`<Link />`](/docs/link)
to consume context.

Comes with some default css class that you can disable or chain with
your custom classes.

## Props
### `cancelAnimation`

type: `bool`
defaultValue: `false`


Cancel animation.


### `children` (required)

type: `union(func|node)`


Probably your 'page' component. I recommend you to use [`<Screen />`](/docs/screen)
to wrap your pages. Or pass in the `screen` prop to automatically
wrap.


### `className`

type: `union(string|func)`


Div container className. A string or a function returning a string.
If not `disableStyle`, this className will be chained to
`react-tiger-transition--route`.

```javascript
<Route
   // className will be "react-tiger-transition--route my-class-name"
   className="my-class-name"
 >
   {routeChildren}
</Route>
```


### `containerProps`

type: `object`


Props passed to div container.

```javascript
<Route
   containerProps={{
     className: 'my-custom-class-name'
     style: { ...someStyle }
   }}
>
   ...
</Route>
```


### `disableStyle`

type: `bool`
defaultValue: `false`


Disable default styles applied to the div container. You can
still use className to set your own styles.

```javascript
<Route
   // will have only "my-class-name" styles
   disableStyle
   className="my-class-name"
 >
   {routeChildren}
</Route>
```


### `screen`

type: `bool`
defaultValue: `false`


Autimatically wraps route child with `<Screen />`.

```javascript
<Route screen>
   {routeChildren}
</Route>
```
Is shorthand for:

```javascript
<Route>
  <Screen>
      {routeChildren}
  </Screen>
</Route>
```


### `screenProps`

type: `object`
defaultValue: `{}`


If `screen` prop is true, you can pass props to it.

```javascript
<Route screen screenProps={{...props}}>
   {routeChildren}
</Route>
```
Is shorthand for:

```javascript
<Route>
  <Screen {...props}>
      {routeChildren}
  </Screen>
</Route>
```


### `transitionProps`

type: `object`
defaultValue: `{}`


Props defined here have higher priority than `globalTransitionProps`
defined in [`<Navigation />`](/docs/navigation) or props defined in
[`<Link />`](/docs/link) `transition` prop.

Usefull for defining specific transitions for the route:

```javascript
<Route
  // every time this route animates will be with these props
  screen
  transitionProps={{
      classNames: 'shuffle-bottom',
      timeout: 400
  }}
>
    {routeChildren}
</Route>
```


\*Any other prop is passed to
[react router `<Route />`](https://reacttraining.com/react-router/web/api/Route).


