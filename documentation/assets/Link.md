# Link

Change transitions on the fly. The next transition is evaluated before
the route change, allowing to go or arrive to with different transitions
for the same routes.

## Props
### `onClick`

Function fired on link click.

type: `func`


### `timeout`

Transition timeout in milliseconds. Used as fallback if not provided on
transition object / function. Used on css transitions.

type: `number`
defaultValue: `600`


### `transition`

Transition/animation to be applied when changing route. String if using
CSS animations. Object or a function returning an object with props to be
passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition) or
[`CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
Default value comes from context, defined in [`<Navigation />`](/docs/navigation) component.

type: `union(string|object|func)`


\*Ref and other props are passed to [react router `<Link />`](https://reacttraining.com/react-router/web/api/Link).

## Example
```javascript
import { Link, glide } from "react-tiger-transition";

// default transition
<Link to='/a' transition={glide}>
  A
</Link>

// default transition with custom args
<Link to='/b' transition={() => glide({...args})}>
  B
</Link>

// your custom css classname for transitions
<Link to='/c' transition='my-css-animation'>
  C
</Link>
```

\*Refer to [transitions API](/docs/transitions), for more details about
transitions.
