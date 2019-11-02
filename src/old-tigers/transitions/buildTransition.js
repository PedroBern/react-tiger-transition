import {
  addClass,
  removeClass,
} from '../../utils';

export const buildTransitionIn = ({
  rules = '',
  className = '',
  replaceBackground = null,
} = {}) => ({
  onEnter: (node) => {
    if (replaceBackground) replaceBackground.fake();
    rules.style.add();
    addClass(node, className);
  },
  onEntering: () => {
    rules.animation.add();
  },
  onEntered: (node) => {
    removeClass(node, className);
    rules.style.remove();
    rules.animation.remove();
    if (replaceBackground) replaceBackground.original();
  },
});

export const buildTransitionOut = ({
  rules = '',
  className = '',
  replaceBackground = null,
} = {}) => ({
  onExit: (node) => {
    if (replaceBackground) replaceBackground.fake();
    rules.style.add();
    addClass(node, className);
  },
  onExiting: () => {
    rules.animation.add();
  },
  onExited: (node) => {
    if (replaceBackground) replaceBackground.original();
    removeClass(node, className);
    rules.style.remove();
    rules.animation.remove();
  }
});
