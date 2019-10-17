import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouterRoute } from "react-router-dom";

import { computeClassName } from './utils';
import Transition from './Transition';
import Screen from './Screen';

/**
 *
 * @description
 * Route uses the original
 * [react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
 * It wraps the children with a transition component based on
 * `<Transition />` and `<CSSTransition />` from
 * [react-transition-group](https://github.com/reactjs/react-transition-group).
 *
 * Must be used inside [`<Navigation />`](/navigation) to allow [`<Link />`](/link)
 * to consume context.
 *
 * Comes with some default css class that you can disable or chain with
 * your custom classes.
 *
 * @afterProps
 * \*Any other prop is passed to
 * [react router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
 *
 * @example
 * import { BrowserRouter as Router} from "react-router-dom";
 *
 * import {
 *   Navigation, // Route needs context from Navigation
 *   Route,
 *   Screen,
 *   Link,
 * } from "react-tiger-transition";
 *
 * // Don't forget to import styles!
 * import "react-tiger-transition/style.css";
 *
 * ...
 * <Router>
 *   <Navigation>
 *     <Route exact path="/a" >
 *       <Screen>
 *         ... my page component goes here ...
 *         ... here is where I use <Link /> ...
 *       </Screen>
 *     </Route>
 *
 *     ... more routes ...
 *
 *   </Navigation>
 * </Router>
 * ...
 *
 * @footer
 * \*Refer to [transitions API](transitions), for more details about transitions.
 */
const Route = ({
  children,
  timeout,
  className,
  disableStyle,
  containerProps,
  transitionProps,
  screen,
  screenProps,
  ...other,
}) => {

  const _className = computeClassName(
    disableStyle,
    className,
    'react-tiger-transition--route'
  )

  return (
    <RouterRoute {...other}>
      {props => (
        <Transition
          match={props.match}
          timeout={timeout}
          className={_className}
          containerProps={containerProps}
          transitionProps={transitionProps}
        >
          {
            screen ?
            <Screen {...screenProps}>
              {children}
            </Screen>
            :
            children
          }
        </Transition>
      )}
    </RouterRoute>
  )
}

Route.defaultProps = {
  timeout: 600,
  disableStyle: false,
  screen: false,
  screenProps: {},
};

Route.propTypes = {
  /**
   * Propably your 'page' component. I recommend you to use <Screen />
   * to wrap your pages.
   */
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,

  /**
   * Transition timeout in milliseconds. Used only on CSS transitions.
   * If using an object or a function for 'transition' prop from
   * <Link />, should return the
   * timeout there.
   */
  timeout: PropTypes.number,

  /**
   * Disable default styles applied to div container. You can
   * still use className to set your own styles.
   */
  disableStyle: PropTypes.bool,

 /**
  * Div container className. A string or a function returning a string.
  * If not disableStyle, this className will be chained to
  * 'react-tiger-transition--route'.
  */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

 /**
  * Autimatically wraps route child with `<Screen />`.
  */
  screen: PropTypes.bool,

 /**
  * If `screen` prop is true, you can pass props to it.
  */
  screenProps: PropTypes.object,

 /**
  * Props passed to `<Transition />` or `<CSSTransition />` from
  * [react-transition-group](https://github.com/reactjs/react-transition-group).
  * Usually you don't need to worry about this.
  * If you pass `appear={true}`, the appearing animation is the default one defined
  * in `<Navigation />`. Props defined here have higher priority than
  * globalTransitionProps defined in `<Navigation />`.
  */
 transitionProps: PropTypes.object,

  /**
   * Props passed to div container.
   */
  containerProps: PropTypes.object,
}

export default Route
