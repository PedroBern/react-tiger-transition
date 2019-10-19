import React, {useContext, useEffect} from 'react';

import BoolCSSTransition from './BoolCSSTransition'
import { NavigationContext } from './Navigation';

/**
 * @docIgnore
 *
 */
const Transition = ({
  children,
  match,
  className,
  containerProps,
  transitionProps
}) => {

  const {
    transition,
    globalTransitionProps,
    endTransition,
    onTransition
  } = useContext(NavigationContext);

  return (
    <BoolCSSTransition
      in={match != null}
      mountOnEnter={!transition.css}
      unmountOnExit
      {...transition}
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
