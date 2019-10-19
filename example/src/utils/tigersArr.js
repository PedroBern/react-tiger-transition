// tigers arr with raw js file
// allow finding the default values
// used to start the demo for each tiger.

import extractArgs from './extractArgs';

import glideRaw from '!raw-loader!../../../src/tigers/glide';
import glideInRaw from '!raw-loader!../../../src/tigers/glideIn';
import glideOutRaw from '!raw-loader!../../../src/tigers/glideOut';
import foldRaw from '!raw-loader!../../../src/tigers/fold';
import unfoldRaw from '!raw-loader!../../../src/tigers/unfold';
import pushRaw from '!raw-loader!../../../src/tigers/push';
import pullRaw from '!raw-loader!../../../src/tigers/pull';
import pushPullRaw from '!raw-loader!../../../src/tigers/pushPull';
import fadeRaw from '!raw-loader!../../../src/tigers/fade';
import scaleRaw from '!raw-loader!../../../src/tigers/scale';
import flipRaw from '!raw-loader!../../../src/tigers/flip';
import slideRaw from '!raw-loader!../../../src/tigers/slide';
import cubeRaw from '!raw-loader!../../../src/tigers/cube';
import roomRaw from '!raw-loader!../../../src/tigers/room';
import carouselRaw from '!raw-loader!../../../src/tigers/carousel';
import sideRaw from '!raw-loader!../../../src/tigers/side';
import glueOutRaw from '!raw-loader!../../../src/tigers/glueOut';
import glueInRaw from '!raw-loader!../../../src/tigers/glueIn';

import {
  glide,
  glideIn,
  glideOut,
  fold,
  unfold,
  push,
  pull,
  pushPull,
  fade,
  scale,
  flip,
  slide,
  cube,
  room,
  carousel,
  side,
  glueOut,
  glueIn,

} from 'react-tiger-transition';

const rawTigers = {
  glide: glideRaw,
  glideIn: glideInRaw,
  glideOut: glideOutRaw,
  fold: foldRaw,
  unfold: unfoldRaw,
  push: pushRaw,
  pull: pullRaw,
  pushPull: pushPullRaw,
  fade: fadeRaw,
  scale: scaleRaw,
  flip: flipRaw,
  slide: slideRaw,
  cube: cubeRaw,
  room: roomRaw,
  carousel: carouselRaw,
  side: sideRaw,
  glueOut: glueOutRaw,
  glueIn: glueInRaw,
}

// console.log(extractArgs(glideRaw));

const tigersArr = [
  {
    name: 'glide',
    func: glide,
  },
  {
    name: 'glideIn',
    func: glideIn,
  },
  {
    name: 'glideOut',
    func: glideOut,
  },
  {
    name: 'fold',
    func: fold,
  },
  {
    name: 'unfold',
    func: unfold,
  },
  {
    name: 'push',
    func: push,
  },
  {
    name: 'pull',
    func: pull,
  },
  {
    name: 'pushPull',
    func: pushPull,
  },
  {
    name: 'fade',
    func: fade,
  },
  {
    name: 'scale',
    func: scale,
  },
  {
    name: 'flip',
    func: flip,
  },
  {
    name: 'slide',
    func: slide,
  },
  {
    name: 'cube',
    func: cube,
  },
  {
    name: 'room',
    func: room,
  },
  {
    name: 'carousel',
    func: carousel,
  },
  {
    name: 'side',
    func: side,
  },
  {
    name: 'glueOut',
    func: glueOut,
  },
  {
    name: 'glueIn',
    func: glueIn,
  },
].map(tiger => ({
  ...tiger,
  args: {...extractArgs(rawTigers[tiger.name])}
}))

export default tigersArr;
