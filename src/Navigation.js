import React, { useState, useEffect, useMemo } from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { computeClassName } from './utils';
import { fade } from './tigers';

export const NavigationContext = React.createContext();

const NavigationProvider = withRouter(({
  children,
  defaultTransition,
  globalTransitionProps,
  defaultRoute,
  disableBodyStyle,

  match,
  location,
  history,
}) => {

  const [transition, setTransition] = useState(defaultTransition)

  const context = {
    transition: transition,
    setTransition: string => new Promise(function(resolve, reject) {
        resolve(setTransition(string))
    }),
    defaultTransition: defaultTransition,
    globalTransitionProps: globalTransitionProps,
  }

  useEffect(() => {
    if (!disableBodyStyle){
      document.body.classList.add('react-tiger-transition--body');
    }
  }, []);

  const matched = useMemo(() => (
    children.some((child, i) => {
      const matchedPath = matchPath(location.pathname, {
        path: child.props.path,
        exact: child.props.exact || false,
        strict: child.props.strict || false,
      });
      if (matchedPath != null){
        return true
      }
    })
  ), [location.pathname, children])

  return (
    <NavigationContext.Provider value={context}>
      {children}
      {!matched && defaultRoute}
    </NavigationContext.Provider>
  )
})

/**
 *
 * @description
 * Route uses the original
 * [react-router `<Route />`](https://reacttraining.com/react-router/web/api/Route).
 * It wraps the children with a transition component based on
 * `<Transition />` and `<CSSTransition />` from
 * [react-transition-group](https://github.com/reactjs/react-transition-group).
 *
 * Must be used inside [`<Navigation />`](/navigation) to consume context.
 *
 * Comes with some default css class that you can disable or chain with
 * your custom classes.
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
 * <div id='root'>
 *   <Router>
 *     <Navigation>
 *       <Route exact path="/a" >
 *         <Screen>
 *           ... my page component goes here ...
 *           ... here is where I use <Link /> ...
 *         </Screen>
 *       </Route>
 *
 *       ... more routes ...
 *
 *     </Navigation>
 *   </Router>
 * </div>
 * ...
 *
 * @footer
 * \*Refer to [transitions API](transitions), for more details about transitions.
 *
 */
const Navigation = ({
  children,
  className,
  disableStyle,
  ...other,
}) => {

  const _className = computeClassName(
    disableStyle,
    className,
    'react-tiger-transition--container'
  )

  return (
    <div className={_className}>
      <NavigationProvider {...other}>
          {children}
      </NavigationProvider>
    </div>
  )
}

Navigation.defaultProps = {
  defaultTransition: fade,
  defaultRoute: <Redirect to='/' />,
  disableBodyStyle: false,
  disableStyle: false,
  globalTransitionProps: {}
};

Navigation.propTypes = {
  /**
   * Disable default style applied to body.
   */
  disableBodyStyle: PropTypes.bool,

  /**
   * Disable default style applied to container.
   */
  disableStyle: PropTypes.bool,

  /**
   * Div container className. A string or a function returning a string.
   * If not disableStyle, this className will be chained to
   * 'react-tiger-transition--container'.
   */
   className: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.func,
   ]),

  /**
   * The default transition to be consumed by every `<Link />` component that
   * transition prop is not specified. Good if you want the same transition for
   * all routes, or most of them. Use string if you have your own css animation,
   * or an object or function returning an object to be passed to <Transition />
   * component from react-transition-group.
   */
  defaultTransition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,

  /**
   * Props passed to `<Transition />` or `<CSSTransition />` from
   * [react-transition-group](https://github.com/reactjs/react-transition-group).
   * Usually you don't need to worry about this.
   * If you pass `appear={true}`, the appearing animation is the defaultTransition
   * prop.
   */
  globalTransitionProps: PropTypes.object,

  /**
   * A route that matches when all routes do not. Default is
   * Redirect component from react-router-dom.
   */
  defaultRoute: PropTypes.element,
}

export default Navigation
