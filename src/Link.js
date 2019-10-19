import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from "react-router-dom";

import { NavigationContext } from './Navigation';

import { withRouterAndRef } from './utils';

/**
 * @description
 * Change transitions on the fly. The next transition is evaluated before
 * the route change, allowing to go or arrive to with different transitions
 * for the same routes.
 *
 * @afterProps
 * \*Ref and other props are passed to [react router `<Link />`](https://reacttraining.com/react-router/web/api/Link).
 *
 * @example
 * import { Link, glide } from "react-tiger-transition";
 *
 * // default transition
 * <Link to='/a' transition={glide}>
 *   A
 * </Link>
 *
 * // default transition with custom args
 * <Link to='/b' transition={() => glide({...args})}>
 *   B
 * </Link>
 *
 * // your custom css classname for transitions
 * <Link to='/c' transition='my-css-animation'>
 *   C
 * </Link>
 *
 * @footer
 * \*Refer to [transitions API](/docs/transitions), for more details about
 * transitions.
 *
 */
const Link = React.forwardRef(({
  match,
  location,
  history,
  staticContext,

  transition,
  children,
  onClick,
  to,
  timeout,
  ...other,
},ref) => {

  const {
    setTransition,
    defaultTransition,
    onTransition
  } = useContext(NavigationContext)

  return (
    <RouterLink
      onClick={() => {
        if (!onTransition){
          setTransition(transition || defaultTransition, timeout)
          if (typeof onClick === 'function') onClick();
        }
      }}
      ref={ref}
      to={onTransition ? location.pathname : to}
      {...other}
    >
      {children}
    </RouterLink>
  )
})

Link.defaultProps = {
  timeout: 600,
};

Link.propTypes = {
  /**
   * Transition/animation to be applied when changing route. String if using
   * CSS animations. Object or a function returning an object with props to be
   * passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition) or
   * [`CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
   * Default value comes from context, defined in [`<Navigation />`](/docs/navigation) component.
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

  /**
   * Transition timeout in milliseconds. Used as fallback if not provided on
   * transition object / function. Used on css transitions.
   */
  timeout: PropTypes.number,
}

export default withRouterAndRef(Link)
