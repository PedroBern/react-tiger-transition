import {
  addClass,
  removeClass,
} from '../../utils';

export const buildTransitionIn = ({
  rules='',
  className='',
  replaceBackground=null,
}={}) => ({
    onEnter: (node, isAppearing) => {
      if (replaceBackground) replaceBackground.fake();
      rules.style.add()
      addClass(node, className)
    },
    onEntering: (node, isAppearing) => {
      rules.animation.add()
    },
    onEntered: (node, isAppearing) => {
      removeClass(node, className)
      rules.style.remove();
      rules.animation.remove()
      if (isAppearing && replaceBackground) replaceBackground.original();
    },
})

export const buildTransitionOut = ({
  rules='',
  className='',
  replaceBackground=null,
}={}) => ({
  onExit: (node, isAppearing) => {
    rules.style.add()
    addClass(node, className)
  },
  onExiting: (node, isAppearing) => {
    rules.animation.add()
  },
  onExited: (node, isAppearing) => {
    if (replaceBackground) replaceBackground.original();
    removeClass(node, className)
    rules.style.remove();
    rules.animation.remove()
  }
})
