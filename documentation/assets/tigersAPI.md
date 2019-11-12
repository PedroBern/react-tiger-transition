# Default Transitions

## carousel

```javascript
// carousel
const carouselDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		opacity: 0.3,
		easing: 'easeInOutCubic',
		zIndex: 1,
		delay: 0,
		scale: 0.4,
		offset: 300,
		angle: 65
	},
	exit: {
		duration: 600,
		opacity: 0.3,
		easing: 'easeInOutCubic',
		zIndex: 2,
		delay: 0,
		scale: 0.4,
		offset: 300,
		angle: 65
	}
};
```

## cube

```javascript
// cube
const cubeDefaultArgs = {
	direction: 'left',
	depth: 1000,
	enter: {
		duration: 600,
		easing: 'ease-in',
		opacity: 0.3,
		zIndex: 1,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease-in',
		opacity: 0.3,
		zIndex: 2,
		delay: 0
	}
};
```

## drop

```javascript
// drop
const dropDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		scale: 0.6,
		delay: 0
	}
};
```

## fade

```javascript
// fade
const fadeDefaultArgs = {
	enter: {
		duration: 600,
		easing: 'ease-in',
		zIndex: 1,
		opacity: 0,
		scale: 1
	},
	exit: {
		duration: 600,
		easing: 'ease-in',
		opacity: 0,
		zIndex: 2,
		delay: 0,
		scale: 1
	}
};
```

## flip

```javascript
// flip
const flipDefaultArgs = {
	direction: 'left',
	duration: 300,
	enter: {
		easing: 'easeOutQuad',
		opacity: 0.2,
		zIndex: 1,
		depth: 1000
	},
	exit: {
		easing: 'easeInQuad',
		opacity: 0.2,
		zIndex: 2,
		depth: 1000
	}
};
```

## fold

```javascript
// fold
const foldDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		angle: 90,
		delay: 0
	}
};
```

## glide

```javascript
// glide
const glideDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'easeOutQuad',
		opacity: 1,
		zIndex: 2,
		scale: 1,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 1,
		scale: 1,
		delay: 0
	}
};
```

## glideIn

```javascript
// glideIn
const glideInDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		scale: 1,
		delay: 0
	}
};
```

## glideOut

```javascript
// glideOut
const glideOutDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		scale: 1
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 0
	}
};
```

## glueIn

```javascript
// glueIn
const glueInDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease-in',
		opacity: 0,
		zIndex: 1,
		angle: 15,
		depth: 200,
		delay: 0
	},
	exit: {
		duration: 400,
		easing: 'ease',
		opacity: 1,
		zIndex: 2
	}
};
```

## glueOut

```javascript
// glueOut
const glueOutDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 400,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 200
	},
	exit: {
		duration: 600,
		easing: 'ease-in',
		opacity: 0,
		zIndex: 1,
		depth: 200,
		angle: 15
	}
};
```

## pull

```javascript
// pull
const pullDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'easeOutBack',
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		angle: 90
	},
	exit: {
		duration: 600,
		easing: 'easeOutBack',
		opacity: 1,
		zIndex: 2,
		delay: 0
	}
};
```

## push

```javascript
// push
const pushDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'easeInBack',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'easeInBack',
		opacity: 0.3,
		zIndex: 1,
		angle: 90,
		delay: 0
	}
};
```

## pushPull

```javascript
// pushPull
const pushPullDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 500,
		easing: 'easeInOutBack',
		opacity: 0,
		zIndex: 1,
		angle: 90,
		delay: 100
	},
	exit: {
		duration: 500,
		easing: 'easeInOutBack',
		opacity: 0,
		zIndex: 2,
		angle: 90
	}
};
```

## rise

```javascript
// rise
const riseDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		scale: 0.6
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 0
	}
};
```

## room

```javascript
// room
const roomDefaultArgs = {
	direction: 'left',
	angle: 90,
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 2,
		delay: 0
	}
};
```

## scale

```javascript
// scale
const scaleDefaultArgs = {
	enter: {
		duration: 300,
		easing: 'ease',
		zIndex: 2,
		delay: 300,
		opacity: 0,
		scale: 0.8
	},
	exit: {
		duration: 300,
		easing: 'ease',
		opacity: 0,
		zIndex: 1,
		delay: 0,
		scale: 0.8
	}
};
```

## shuffle

```javascript
// shuffle
const shuffleDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'easeOutQuad',
		opacity: 1,
		zIndex: 2,
		scale: 1,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 1,
		scale: 1,
		delay: 0
	}
};
```

## side

```javascript
// side
const sideDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 400,
		easing: 'ease-out',
		opacity: 0,
		zIndex: 1,
		delay: 200,
		depth: 500,
		angle: 90,
		offset: 100
	},
	exit: {
		duration: 400,
		easing: 'ease-in',
		opacity: 0,
		zIndex: 2,
		depth: 500,
		angle: 90,
		offset: 100,
		delay: 0
	}
};
```

## slide

```javascript
// slide
const slideDefaultArgs = {
	direction: 'left',
	depth: 500,
	offset: 200,
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.5,
		zIndex: 1,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 0.5,
		zIndex: 2
	}
};
```

## unfold

```javascript
// unfold
const unfoldDefaultArgs = {
	direction: 'left',
	enter: {
		duration: 600,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		angle: 90,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2,
		delay: 0
	}
};
```

