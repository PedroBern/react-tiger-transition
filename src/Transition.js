import React, {useContext, useEffect} from 'react';

import BoolCSSTransition from './BoolCSSTransition'
import { NavigationContext } from './Navigation';

/**
 * @docIgnore
 *
 */
const Transition = ({
  children,
  timeout,
  match,
  className,
  containerProps,
  transitionProps
}) => {

  const {
    transition,
    globalTransitionProps,
    setOnTransition,
    onTransition
  } = useContext(NavigationContext)

  let css = false;
  let props = {};

  if (typeof(transition) === 'string'){
    props.classNames = transition;
    props.timeout = timeout;
    css = true;
  }
  else if (Object.prototype.toString.call(transition) === '[object Object]'){
    props = {...transition};
  }
  else if (typeof(transition) === 'function'){
    props = {...transition()}
  }

  // useEffect(() => {
  //   if (onTransition) {
  //     window.setTimeout(function() {
  //       // console.log(document.head.children)
  //       // const garbage = document.querySelectorAll('style[data-meta="tiger-transition"]');
  //       // if (garbage.length > 0){
  //       //   garbage.forEach(g => document.head.removeChild(g))
  //       // }
  //       setOnTransition(false);
  //     },
  //     props.timeout);
  //   }
  // }, [onTransition])

  return (
    <BoolCSSTransition
      in={match != null}
      mountOnEnter={!css}
      unmountOnExit
      css={css}
      {...props}
      {...globalTransitionProps}
      {...transitionProps}
    >
      <div className={className} {...containerProps}>
        {children}
      </div>
    </BoolCSSTransition>

  )
}

export default Transition;
