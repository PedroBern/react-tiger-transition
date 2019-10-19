# Screen

A div with some default css applied to it. Designed to be child of [`<route />`](/docs/route),
or parent if passed the `container` prop.

## Props
### `className`

Div container `className`. A string or a function returning a string.
If not `disableStyle`, this `className` will be chained to
`react-tiger-transition--screen`.

type: `union(string|func)`


### `container`

Transform it into a container to wrap routes. `<Navigation />` already
does that, but maybe you want it to create an extra container.

type: `bool`
defaultValue: `false`


### `disableStyle`

Disable default styles applied to div container. You can
still use `className` to set your own styles.

type: `bool`
defaultValue: `false`


\*Ref and other props are passed to div container.

## Example
```javascript
import { Screen } from 'react-tiger-transition';

<Screen>
 <MyPage />
</Screen>
```

