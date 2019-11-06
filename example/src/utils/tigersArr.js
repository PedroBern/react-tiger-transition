// tigers arr with raw js file
// allow finding the default values
// used to start the demo for each tiger.

import tigersDefaultArgs from 'docsAssets/generatedTigersArgs.json';

import {
  glide,
  glideIn,
  glideOut,
  shuffle,
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
  rise,
  drop,
} from 'react-tiger-transition';

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
    name: 'rise',
    func: rise,
  },
  {
    name: 'drop',
    func: drop,
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
  {
    name: 'shuffle',
    func: shuffle,
  }
].map(tiger => {

  tiger.func({
    name: tiger.name + '-demo'
  });

  return ({
    ...tiger,
    args: {
      ...tigersDefaultArgs.defaultArgs.filter(t => (
        t.name === tiger.name
      ))[0].args
    }
  });
})

export default tigersArr;
