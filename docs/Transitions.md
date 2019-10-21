# Transitions

The transitions exported with this module are functions evaluated on routing. You can set arguments for `enter`, `exit`, or both by simply not defining it.

## Using default arguments

```javascript
import { glide } from 'react-tiger-transition';

// default args
const transition = glide;
```

## Defining for both `enter` and `exit`

```javascript
// defining for both 'enter' and 'exit'
const transition = () => glide({
    direction: 'right',
    duration: 1000,
    easing: 'ease-in-out',
    opacity: 1,
  })
```

## Specifing for `enter` or `exit`

```javascript
// specifing for enter or exit
// this have lower priority, so if the same key is defined
// as above, this will not work.
transition = () => glide({
    enter: {
      opacity: 0.8
    }
    exit: {
      easing: 'ease-in-out',
      opacity: 0,
    }
  })
```
