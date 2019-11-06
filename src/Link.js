import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { Link as RouterLink } from 'react-router-dom';

import { NavigationContext } from './Navigation';

import { withRouterAndRef } from './utils';

/**
 * @description
 * Change transitions on the fly. The next transition is evaluated before
 * the route change, allowing to easily reach and leave the same url with
 * different transitions.
 *
 * @afterProps
 * \*Ref and other props are passed to [react router `<Link />`](https://reacttraining.com/react-router/web/api/Link).
 *
 */
const Link = React.forwardRef(({
  /* eslint-disable */
  match,
  location,
  history,
  staticContext,

  children,
  to,
  /* eslint-enable */

  transition,
  onClick,
  timeout,
  ...other
}, ref) => {

  const {
    setTransition,
    defaultTransition,
    onTransition
  } = useContext(NavigationContext);

  return (
    <RouterLink
      onClick={() => {
        if (!onTransition) {
          setTransition(transition || defaultTransition, timeout);
          if (typeof onClick === 'function') onClick();
        }
      }}
      ref={ref}
      to={onTransition ? location.pathname : to} // eslint-disable-line react/prop-types
      {...other}
    >
      {children}
    </RouterLink>
  );
});

Link.defaultProps = {
  timeout: 600,
};

Link.displayName = 'TigerLink';

Link.propTypes = {
  /**
   * Transition to be applied when changing route. It is passed down to
   * [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition)
   *
   * Default value comes from context, defined in
   * [`<Navigation />`](/docs/navigation) component.
   *
   * If string, it is the `classNames` prop:
   *
   * ```javascript
   * <Link transition='my-animation' {...linkProps}>
   *    {linkChildren}
   * </Link>
   * ```
   *
   * Object:
   *
   * ```javascript
   * <Link
   *    transition={{
   *      classNames: 'my-animation',
   *      ...moreProps
   *    }}
   *    {...linkProps}
   * >
   *    {linkChildren}
   * </Link>
   * ```
   *
   * A function that return props for CSSTransition:
   *
   * ```javascript
   * <Link
   *    transition={() => {
   *      // ...some logic
   *      return ({
   *        classNames: 'my-animation',
   *        ...moreProps
   *      })
   *    }}
   *    {...linkProps}
   * >
   *    {linkChildren}
   * </Link>
   * ```
   */
  transition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),

  /**
   * Function fired on link click.
   *
   * ```javascript
   * <Link
   *    onClick={() => console.log("I execute after link click")}
   *    {...linkProps}
   * >
   *    {linkChildren}
   * </Link>
   * ```
   */
  onClick: PropTypes.func,

  /**
   * Transition timeout in milliseconds. Used as fallback if not provided on
   * `transition` prop object / function.
   *
   * ```javascript
   * <Link
   *    timeout={600} //default value is overwritten if provided in transition prop.
   *    {...linkProps}
   * >
   *    {linkChildren}
   * </Link>
   * ```
   */
  timeout: PropTypes.number,
};

export default withRouterAndRef(Link);
