# Screen

A div with some default css applied to it. Designed to be child of [`<route />`](/docs/route),
or parent if passed the `display` prop.

## Props
### `className`

type: `union(string|func)`


Div container `className`. A string or a function returning a string.
If not `disableStyle`, this `className` will be chained to
`react-tiger-transition--screen`.

```javascript
<Screen
   // className will be "react-tiger-transition--screen my-class-name"
   className="my-class-name"
 >
   {routeChildren}
</Screen>
```


### `container`

type: `bool`
defaultValue: `false`


Transform it into a container to wrap routes. `<Navigation />` already
does that. If you want to create a display container with transitions,
use the `display` props.


### `disableStyle`

type: `bool`
defaultValue: `false`


Disable default styles applied to div container. You can
still use `className` to set your own styles.

```javascript
<Screen
   // will have only "my-class-name" styles
   disableStyle
   className="my-class-name"
 >
   {screenChildren}
</Screen>
```


### `display`

type: `bool`
defaultValue: `false`


Create a display of routes. Works the same way, but does not animate
on arriving and leaving to the base url of the screen (url where the
screen was mounted).

```javascript
<Screen
   //write routes inside this screen
   display
 >
   { ...children }
</Screen>
```


\*Ref and other props are passed to div container.


