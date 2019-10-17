import React, {useContext} from 'react';

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

  if (onTransition) {
    window.setTimeout(() => setOnTransition(false), props.timeout);
  }

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
