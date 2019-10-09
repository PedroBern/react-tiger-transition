# Link

Change transitions on the fly.

## Props
### `onClick`

Function fired on link click.

type: `func`


### `transition`

Transition/animation to be applied when changing route.
String if using CSS animations.
Object or a function returning an object with props to be
passed to `<Transition />` component from react-transition-group.
Default value comes from context, defined in `<Navigation />` component.

type: `union(string|object|func)`


\*Ref and other props are passed to [react router `<Link />`](https://reacttraining.com/react-router/web/api/Link).

## Example
```javascript
import { Link, glide } from "react-tiger-transition";

<Link to='/a' transition={glide}>
  A
</Link>

<Link to='/b' transition={() => glide({...args})}>
  B
</Link>

<Link to='/c' transition='my-css-animation'>
  C
</Link>
```

\*Refer to [transitions API](transitions), for more details about transitions.
