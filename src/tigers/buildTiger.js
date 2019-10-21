/*
  base is a higher order function,
  returns a function that takes an object to merge with default
  parameters for 'enter',  'exit', or both

    { opacity: 1 }

    becomes shorthand of:

    {
      enter: {opacity: 1},
      exit: {opacity: 1}
    }

  beeing the upper level with higher priority, so
  if someone call a tiger with:

  {
    opacity: 1, // higher priority
    enter: {
      opacity: 0, // overwritten by 1
    },
  }

*/

import { ReplaceBackground } from '../utils';

export const buildTiger = (
  argsInit,
  enterInit,
  enterTransition,
  exitInit,
  exitTransition
) => {

   return ({
     enter,
     exit,
     ...args
   }={}) => {

    enter = {...enterInit, ...enter};
    exit = {...exitInit, ...exit};
    args = {...argsInit, ...args};

    if (args.backgroundColor) {
      args.replaceBackground = new ReplaceBackground(args.backgroundColor);
    }

    const timeout =
       typeof args.timeout === 'function' && args.duration ? args.timeout(args.duration) :
       args.duration && args.delay ? args.duration + args.delay :
       args.duration && enter.delay ? args.duration + enter.delay :
       args.duration ? args.duration :
       enter.duration >= exit.duration ? enter.duration + enter.delay :
       enter.duration + enter.delay >= exit.duration ? enter.duration + enter.delay :
       exit.duration;

     return {
       timeout: timeout,
       ...enterTransition({...enter, ...args}),
       ...exitTransition({...exit, ...args}),
     }
   }

}
