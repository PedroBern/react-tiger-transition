# Quickstart

`react-tiger-transition` is great to build page transitions!

- Zero dependencies.
- 20+ built-in transitions (the tigers).
- Minimum configuration.
- Fully customizable (raise your own tigers!).
- Based on [react-transition-group](https://github.com/reactjs/react-transition-group) and [react-router-dom](https://github.com/ReactTraining/react-router).
- Inspired by [react-router-transition](https://github.com/maisano/react-router-transition) and [this transitions collection](https://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/).

## Installation

Install via npm:

```
npm i react-tiger-transition
```

Install peerDependencies:

```
npm i react-router-dom react-transition-group
```

## 3 steps configuration

### 1. Import styles

*Some basic css* is necessary to make these page transitions work.

```js
// one of:
// styles/main.css
// styles/main.min.css

import "react-tiger-transition/styles/main.min.css";
```

The provided css will:

  - Remove body padding and margin
  - Create a relative container for [navigation](/docs/navigation)
  - Create a layout for each [route](/docs/reoute) component
  - Style the [screen](/docs/screen) component


### 2. Set the height of the top app container

As [navigation](/docs/navigation) is a relative container, you must set the height.

Probably something like:

```css
#root {
  height: 100vh;
}
```


### 3. Inject tigers css

The *tigers* are functions that inject the necessary css for the transition, so you can easily customize it.

```js
import { glide } from "react-tiger-transition";

glide({
  name: "glide-right",
  direction: "right",
});
```

It's important to set an unique name for the transition, otherwise the function will override other inject css with the same name.

Check the [transitions api](/docs/transitions).

## Basic Example
