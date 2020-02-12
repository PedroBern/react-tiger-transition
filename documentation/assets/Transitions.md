# Transitions

The transitions exported with this module are functions that inject style on the document head. You must define a unique name, otherwise it will overrides previous injected styles (by this module). You can set arguments for `enter`, `exit`, or both by simply not defining it.

## Quickstart

Import all transitions you want to use in your app in a separated file:

```javascript
// transitions.js

import { glide, fade } from 'react-tiger-transition';

// inject the generated styles in the document:

glide({
  name: "default-glide-left"
});

fade({
  name: "default-fade"
});

glide({
  name: "default-glide-right",
  direction: "right"
});
```

Then, import this file on the top of your app:

```javascript
// index.js

import "../path/to/transitions.js";

...

```

Now it's ready to be used:

```javascript

<Link transition='default-fade' {...linkProps}>
    {...linkChildren}
</Link>

```

## Using default arguments

To help consistency, all tigers have the full duration of `600 ms` and when direction is available it is `left` (only `fade` and `scale` does not have direction).

```javascript
import { glide } from 'react-tiger-transition';

glide({
  name: "default-glide-left"
});
```

## Defining for both `enter` and `exit`

```javascript
// defining for both 'enter' and 'exit'
glide({
    name: "glide-right"
    direction: 'right',
    duration: 1000, // you will need to handle timeout, default is 600 ms
    easing: 'easeInOutQuad', // see https://easings.net/
    opacity: 1,
  })
```

## Specifing for `enter` or `exit`

```javascript
// specifing for enter or exit
// this have lower priority, so if the same key is defined
// as above, this will not work.
// See the tiger default values,
// default properties defined outside
// enter or exit keys will not work this way. Like 'direction' on most tigers.
glide({
    name: "custom-glide-left"
    enter: {
      opacity: 0.8
    }
    exit: {
      easing: 'easeInOutQuad', // see https://easings.net/
      opacity: 0,
    }
  })
```
