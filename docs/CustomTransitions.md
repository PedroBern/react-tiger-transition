# Custom transitions

If you are not simple like the rest of humans and no available tiger is
wild enough for you, please raise your own!

## Object

An objects with props for [Transition](https://reactcommunity.org/react-transition-group/transition)
component from [`react-transition-group`](https://reactcommunity.org/react-transition-group/transition).

```javascript
const myWildTiger = {
  timeout: timeout, // milliseconds
  onEnter: (node, isAppearing) => {},
  onEntering: (node, isAppearing) => {},
  onEntered: (node, isAppearing) => {},
  onExit: (node, isAppearing) => {},
  onEexiting: (node, isAppearing) => {},
  onExited: (node, isAppearing) => {},
};

<Link to='/' transition={myWildTiger}>
  Home
</Link>

```

## Function

Any function that returns an object like above.

```js
<Link to='/' transition={() => myWildTiger({...args})}>
  Home
</Link>

```

## CSS

Same as [CSSTransition](https://reactcommunity.org/react-transition-group/css-transition)
component from [`react-transition-group`](https://reactcommunity.org/react-transition-group/css-transition).

```js
<Link to='/' transition='my-wild-tiger'>
  Home
</Link>

```
