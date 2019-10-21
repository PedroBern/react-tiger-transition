import React, {useContext, useEffect} from 'react';

import BoolCSSTransition from './BoolCSSTransition'
import { NavigationContext, evalTransition } from './Navigation';

/**
 * @docIgnore
 *
 */
const Transition = ({
  children,
  match,
  className,
  containerProps,
  transitionProps,
  forceTransition,
}) => {

  const {
    transition,
    globalTransitionProps,
    endTransition,
    onTransition
  } = useContext(NavigationContext);

  const computeTransition = forceTransition ?
  {...evalTransition({
      transition: forceTransition,
      timeout:  globalTransitionProps.timeout ? globalTransitionProps.timeout :
        transitionProps.timeout ? transitionProps.timeout :
        600 // fallback if user is using css transition and dont set timeout
  })} :
  transition;

  return (
    <BoolCSSTransition
      in={match != null}
      mountOnEnter={!computeTransition.css}
      unmountOnExit
      {...computeTransition}
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
