# Default Transitions

## carousel

```javascript
// carousel
const carouselDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	easing: 'easeInOutCubic',
	enter: {
		duration: 700,
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		scale: 0.4,
		offset: 300,
		angle: 65
	},
	exit: {
		duration: 700,
		opacity: 0.3,
		zIndex: 2,
		scale: 0.4,
		offset: 300,
		angle: 65
	}
}
const carouselDefault = () => carousel({...carouselDefaultArgs});
```

## cube

```javascript
// cube
const cubeDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	depth: 300,
	easing: 'ease-in',
	duration: 700,
	enter: {
		opacity: 0.3,
		zIndex: 1
	},
	exit: {
		opacity: 0.3,
		zIndex: 2
	}
}
const cubeDefault = () => cube({...cubeDefaultArgs});
```

## fade

```javascript
// fade
const fadeDefaultArgs = {
	backgroundColor: 'white',
	enter: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 2
	},
	exit: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 1
	}
}
const fadeDefault = () => fade({...fadeDefaultArgs});
```

## flip

```javascript
// flip
const flipDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	duration: 500,
	depth: 500,
	timeout: duration => duration * 2,
	enter: {
		easing: 'easeOutQuad',
		opacity: 0.2,
		zIndex: 1
	},
	exit: {
		easing: 'easeInQuad',
		opacity: 0.2,
		zIndex: 2
	}
}
const flipDefault = () => flip({...flipDefaultArgs});
```

## fold

```javascript
// fold
const foldDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	easing: 'easeInOutCubic',
	enter: {
		duration: 700,
		opacity: 0.3,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 700,
		opacity: 0.3,
		zIndex: 1,
		angle: 90
	}
}
const foldDefault = () => fold({...foldDefaultArgs});
```

## glide

```javascript
// glide
const glideDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 1
	}
}
const glideDefault = () => glide({...glideDefaultArgs});
```

## glideIn

```javascript
// glideIn
const glideInDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 0.3,
		zIndex: 1,
		scale: 1
	}
}
const glideInDefault = () => glideIn({...glideInDefaultArgs});
```

## glideOut

```javascript
// glideOut
const glideOutDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'ease',
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		scale: 1
	},
	exit: {
		duration: 700,
		easing: 'ease',
		opacity: 1,
		zIndex: 2
	}
}
const glideOutDefault = () => glideOut({...glideOutDefaultArgs});
```

## glueIn

```javascript
// glueIn
const glueInDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 800,
		easing: 'ease-in',
		opacity: 0,
		zIndex: 1,
		angle: 15,
		depth: 200,
		delay: 0
	},
	exit: {
		duration: 600,
		easing: 'ease',
		opacity: 1,
		zIndex: 2
	}
}
const glueInDefault = () => glueIn({...glueInDefaultArgs});
```

## glueOut

```javascript
// glueOut
const glueOutDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 600,
		easing: 'easeInOutQuad',
		opacity: 1,
		zIndex: 2,
		delay: 200
	},
	exit: {
		duration: 800,
		easing: 'easeOutQuad',
		opacity: 0,
		zIndex: 1,
		depth: 200,
		angle: 15
	}
}
const glueOutDefault = () => glueOut({...glueOutDefaultArgs});
```

## pull

```javascript
// pull
const pullDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeOutBack',
		opacity: 0.3,
		zIndex: 1,
		delay: 0,
		angle: 90
	},
	exit: {
		duration: 700,
		easing: 'easeOutBack',
		opacity: 1,
		zIndex: 2
	}
}
const pullDefault = () => pull({...pullDefaultArgs});
```

## push

```javascript
// push
const pushDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeInBack',
		opacity: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 700,
		easing: 'easeInBack',
		opacity: 0.3,
		zIndex: 1,
		angle: 90
	}
}
const pushDefault = () => push({...pushDefaultArgs});
```

## pushPull

```javascript
// pushPull
const pushPullDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeInOutBack',
		opacity: 0,
		zIndex: 1,
		angle: 90,
		delay: 150
	},
	exit: {
		duration: 700,
		easing: 'easeInOutBack',
		opacity: 0,
		zIndex: 2,
		angle: 90
	}
}
const pushPullDefault = () => pushPull({...pushPullDefaultArgs});
```

## room

```javascript
// room
const roomDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	angle: 90,
	easing: 'easeInOutCubic',
	enter: {
		duration: 700,
		opacity: 0.3,
		zIndex: 1
	},
	exit: {
		duration: 700,
		opacity: 0.3,
		zIndex: 2
	}
}
const roomDefault = () => room({...roomDefaultArgs});
```

## scale

```javascript
// scale
const scaleDefaultArgs = {
	backgroundColor: null,
	enter: {
		duration: 400,
		easing: 'easeOutQuad',
		opacity: 0,
		zIndex: 1,
		scale: 0.7,
		delay: 400
	},
	exit: {
		duration: 400,
		easing: 'easeOutQuad',
		opacity: 0,
		zIndex: 2,
		scale: 0.7
	}
}
const scaleDefault = () => scale({...scaleDefaultArgs});
```

## shuffle

```javascript
// shuffle
const shuffleDefaultArgs = {
	direction: 'top',
	backgroundColor: null,
	enter: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 1,
		scale: 1,
		zIndex: 2,
		delay: 0
	},
	exit: {
		duration: 700,
		easing: 'easeOutQuad',
		opacity: 0.3,
		scale: 1,
		zIndex: 1
	}
}
const shuffleDefault = () => shuffle({...shuffleDefaultArgs});
```

## side

```javascript
// side
const sideDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	enter: {
		duration: 500,
		easing: 'easeOutCubic',
		opacity: 0,
		zIndex: 1,
		delay: 300,
		depth: 500,
		angle: 90,
		offset: 100
	},
	exit: {
		duration: 500,
		easing: 'easeInCubic',
		opacity: 0,
		zIndex: 2,
		depth: 500,
		angle: 90,
		offset: 100
	}
}
const sideDefault = () => side({...sideDefaultArgs});
```

## slide

```javascript
// slide
const slideDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	depth: 500,
	offset: 200,
	easing: 'easeInOutCubic',
	enter: {
		duration: 700,
		opacity: 0.5,
		zIndex: 1,
		delay: 0
	},
	exit: {
		duration: 700,
		opacity: 0.5,
		zIndex: 2
	}
}
const slideDefault = () => slide({...slideDefaultArgs});
```

## unfold

```javascript
// unfold
const unfoldDefaultArgs = {
	direction: 'left',
	backgroundColor: null,
	easing: 'easeInOutCubic',
	enter: {
		duration: 700,
		opacity: 0.3,
		zIndex: 1,
		delay: 0
	},
	exit: {
		duration: 700,
		opacity: 1,
		zIndex: 2
	}
}
const unfoldDefault = () => unfold({...unfoldDefaultArgs});
```

