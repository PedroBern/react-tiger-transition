import { addClass, removeClass } from '../../utils';

export const buildTransitionIn = ({
  transition = () => {},
  replaceBackground = null,
} = {}) => ({
  onEnter: (node, isAppearing) => {
    if (replaceBackground) replaceBackground.fake();
    if (isAppearing) addClass(node, 'isAppearing');
  },
  onEntering: (node, isAppearing) => {
    if (isAppearing) {
      /**
       * v2 animates with animejs, that animates directyly on node,
       * on 'isAppearing' it gets a glitch on animatio,
       * as a workaround I add 100ms to begin the animation, it solves
       * all cases for now.
       * Also we need to set the class 'isAppearing' on 'onEnter' and
       * remove on 'onEntered', this class is just an opacity=0,
       * preventing the node to be visible before the animation starts
       */
      setTimeout(() => transition(node),
        100);
    }
    else {
      transition(node);
    }
  },
  onEntered: (node, isAppearing) => {
    if (replaceBackground) replaceBackground.original();
    if (isAppearing) removeClass(node, 'isAppearing');
  },
});

export const buildTransitionOut = ({
  transition = () => {},
  replaceBackground = null,
} = {}) => ({
  onExit: () => {
    if (replaceBackground) replaceBackground.fake();
  },
  onExiting: (node) => {
    transition(node);
  },
  onExited: () => {
    if (replaceBackground) replaceBackground.original();
  },
});
