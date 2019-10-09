# Screen

Div container for your pages. Designed to be child of `<Route />`, but
you can always use your own page component wrapper.

## Props
### `className`

Div container className. A string or a function returning a string.
If not disableStyle, this className will be chained to
`react-tiger-transition--screen`.

type: `union(string|func)`


### `disableStyle`

Disable default styles applied to div container. You can
still use className to set your own styles.

type: `bool`
defaultValue: `false`


\*Ref and other props are passed to div container.

## Example
```javascript
import { Screen } from 'react-tiger-transition';

<Screen>
 ...my page...
</Screen>
```

