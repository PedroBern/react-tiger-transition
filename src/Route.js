import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { Route as RouterRoute } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { computeClassName } from './utils';
import Screen from './Screen';
import { NavigationContext } from './Navigation';

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
 * <Router>
 *   <Navigation>
 *     <Route exact path="/a" >
 *       <Screen>
 *         <PageA />
 *       </Screen>
 *     </Route>
 *
 *     <Route exact path="/b" screen children={<PageB />} />
 *
 *     { moreRoutes }
 *
 *   </Navigation>
 * </Router>
 *
 * @footer
 * \*Refer to [transitions API](/docs/transitions), for more details about
 * transitions.
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
          unmountOnExit
          {...transition}
          {...globalTransitionProps}
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
   */
  disableStyle: PropTypes.bool,

  /**
  * Div container className. A string or a function returning a string.
  * If not `disableStyle`, this className will be chained to
  * `react-tiger-transition--route` or `react-tiger-transition--fixed`.
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
  * Props passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
  * or [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
  * Usually you don't need to worry about this. If you pass `appear`, the
  * appearing animation is the default one defined in [`<Navigation />`](/docs/navigation).
  * Props defined here have higher priority than `globalTransitionProps`
  * defined in [`<Navigation />`](/docs/navigation).
  */
  transitionProps: PropTypes.object,

  /**
   * Props passed to div container.
   */
  containerProps: PropTypes.object,

  /**
   *  Cancel animation.
   */
  cancelAnimation: PropTypes.bool
};

export default Route;
