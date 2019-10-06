import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from "react-router-dom";

import { NavigationContext } from './Navigation';
/**
 *
 * Link desc
 */
const Link = React.forwardRef(({
  transition,
  children,
  onClick,
  ...other,
},ref) => {

  const { setTransition, defaultTransition } = useContext(NavigationContext)

  return (
    <RouterLink
      onClick={() => {
        setTransition(transition || defaultTransition)
        if (typeof onClick === 'function') onClick();
      }}
      ref={ref}
      {...other}
    >
      {children}
    </RouterLink>
  )
})

Link.propTypes = {
  /**
   * Transition/animation to be applied when changing route.
   * String if using CSS animations.
   * Object or a function returning an object with props to be
   * passed to <Transition /> component from react-transition-group.
   * Default value comes from context, defined in <Navigation /> component.
   */
  transition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  /**
   * Function fired on link click.
   */
  onClick: PropTypes.func,
}

export default Link
