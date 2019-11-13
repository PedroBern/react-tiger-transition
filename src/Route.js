import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { Route as RouterRoute } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { computeClassName } from './utils';
import Screen from './Screen';
import { NavigationContext } from './context';

/**
 *
 * @description
 * Route uses the original
 * [react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
 * It wraps the children with a transition component based on
 * [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
   and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
 *
 * Must be used inside [`<Navigation />`](/docs/navigation) to allow [`<Link />`](/docs/link)
 * to consume context.
 *
 * Comes with some default css class that you can disable or chain with
 * your custom classes.
 *
 * @afterProps
 * \*Any other prop is passed to
 * [react router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
 *
 */
const Route = ({
  children,
  className,
  disableStyle,
  containerProps,
  transitionProps,
  screen,
  screenProps,
  cancelAnimation,
  skip,
  ...other
}) => {

  const _className = computeClassName(
    disableStyle,
    className,
    `react-tiger-transition--route`
  );

  const cancelTransition = cancelAnimation ? {
    onEnter: () => {},
    onEntering: () => {},
    onEntered: () => {},
    onExit: () => {},
    onExiting: () => {},
    onExited: () => {},
    classNames: 'canceled-transition'
  } : {};

  const {
    transition,
    globalTransitionProps,
  } = useContext(NavigationContext);

  return (
    <RouterRoute {...other}>
      {props => (
        <CSSTransition
          in={props.match != null} // eslint-disable-line react/prop-types
          {...globalTransitionProps}
          {...transition}
          {...transitionProps}
          {...cancelTransition}
        >
          <div className={_className} {...containerProps}>
            {
              screen
                ? <Screen {...screenProps}>
                  {children}
                </Screen>
                : children
            }
          </div>
        </CSSTransition>
      )}
    </RouterRoute>
  );
};

Route.defaultProps = {
  disableStyle: false,
  screen: false,
  screenProps: {},
  transitionProps: {},
  cancelAnimation: false
};

Route.displayName = 'TigerRoute';

Route.propTypes = {
  /**
   * Probably your 'page' component. I recommend you to use [`<Screen />`](/docs/screen)
   * to wrap your pages. Or pass in the `screen` prop to automatically
   * wrap.
   */
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,

  /**
   * Disable default styles applied to the div container. You can
   * still use className to set your own styles.
   *
   * ```javascript
   * <Route
   *    // will have only "my-class-name" styles
   *    disableStyle
   *    className="my-class-name"
   *  >
   *    {routeChildren}
   * </Route>
   * ```
   */
  disableStyle: PropTypes.bool,

  /**
  * Div container className. A string or a function returning a string.
  * If not `disableStyle`, this className will be chained to
  * `react-tiger-transition--route`.
  *
  * ```javascript
  * <Route
  *    // className will be "react-tiger-transition--route my-class-name"
  *    className="my-class-name"
  *  >
  *    {routeChildren}
  * </Route>
  * ```
  */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /**
  * Autimatically wraps route child with `<Screen />`.
  *
  * ```javascript
  * <Route screen>
  *    {routeChildren}
  * </Route>
  * ```
  * Is shorthand for:
  *
  * ```javascript
  * <Route>
  *   <Screen>
  *       {routeChildren}
  *   </Screen>
  * </Route>
  * ```
  *
  */
  screen: PropTypes.bool,

  /**
  * If `screen` prop is true, you can pass props to it.
  *
  * ```javascript
  * <Route screen screenProps={{...props}}>
  *    {routeChildren}
  * </Route>
  * ```
  * Is shorthand for:
  *
  * ```javascript
  * <Route>
  *   <Screen {...props}>
  *       {routeChildren}
  *   </Screen>
  * </Route>
  * ```
  */
  screenProps: PropTypes.object,

  /**
  * Props defined here have higher priority than `globalTransitionProps`
  * defined in [`<Navigation />`](/docs/navigation) or props defined in
  * [`<Link />`](/docs/link) `transition` prop.
  *
  * Usefull for defining specific transitions for the route:
  *
  * ```javascript
  * <Route
  *   // every time this route animates will be with these props
  *   screen
  *   transitionProps={{
  *       classNames: 'shuffle-bottom',
  *       timeout: 400
  *   }}
  * >
  *     {routeChildren}
  * </Route>
  * ```
  */
  transitionProps: PropTypes.object,

  /**
   * Props passed to div container.
   *
   * ```javascript
   * <Route
   *    containerProps={{
   *      className: 'my-custom-class-name'
   *      style: { ...someStyle }
   *    }}
   * >
   *    ...
   * </Route>
   * ```
   */
  containerProps: PropTypes.object,

  /**
   *  Cancel animation.
   */
  cancelAnimation: PropTypes.bool,

  /**
   *  Allow to match route together with defaultRoute from [`<Navigation />`](/docs/navigation).
   */
  skip: PropTypes.bool
};

export default Route;
