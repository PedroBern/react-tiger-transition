// tigers arr with raw js file
// allow finding the default values
// used to start the demo for each tiger.

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


export default [
  {
    name: 'glide',
    func: glide,
    raw: glideRaw,
  },
  {
    name: 'glideIn',
    func: glideIn,
    raw: glideInRaw,
  },
  {
    name: 'glideOut',
    func: glideOut,
    raw: glideOutRaw,
  },
  {
    name: 'fold',
    func: fold,
    raw: foldRaw,
  },
  {
    name: 'unfold',
    func: unfold,
    raw: unfoldRaw,
  },
  {
    name: 'push',
    func: push,
    raw: pushRaw,
  },
  {
    name: 'pull',
    func: pull,
    raw: pullRaw,
  },
  {
    name: 'pushPull',
    func: pushPull,
    raw: pushPullRaw,
  },
  {
    name: 'fade',
    func: fade,
    raw: fadeRaw,
  },
  {
    name: 'scale',
    func: scale,
    raw: scaleRaw,
  },
  {
    name: 'flip',
    func: flip,
    raw: flipRaw,
  },
  {
    name: 'slide',
    func: slide,
    raw: slideRaw,
  },
  {
    name: 'cube',
    func: cube,
    raw: cubeRaw,
  },
  {
    name: 'room',
    func: room,
    raw: roomRaw,
  },
  {
    name: 'carousel',
    func: carousel,
    raw: carouselRaw,
  },
  {
    name: 'side',
    func: side,
    raw: sideRaw,
  },
  {
    name: 'glueOut',
    func: glueOut,
    raw: glueOutRaw,
  },
  {
    name: 'glueIn',
    func: glueIn,
    raw: glueInRaw,
  },
]
