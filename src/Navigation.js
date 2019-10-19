import React, { useMemo, useReducer } from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { computeClassName } from './utils';
import { fade } from './tigers';
import Screen from './Screen';

import './style.css';

export const NavigationContext = React.createContext();

const evalTransition = ({transition, timeout}) => (
  typeof(transition) === 'function' ?
  { timeout, ...transition(), css: false } :
  Object.prototype.toString.call(transition) === '[object Object]' ?
  { timeout, ...transition, css: false } :
  { timeout, classNames: transition, css: true}
)

function reducer(state, action) {
  switch (action.type) {

    case 'setTransition':
      const transition = evalTransition({...action.value});
      window.setTimeout(function() {
        action.dispatch({type: 'endTransition'})
      }, transition.timeout + 200);
      return {
        ...state,
        transition,
        onTransition: true,
      };

    case 'endTransition':
      return {
        ...state,
        onTransition: false,
      };

    default:
      return { ...state };
  }
}

const NavigationProvider = withRouter(({
  children,
  defaultRoute,
  initialState,

  match,
  location,
  history,
}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const context = {
    ...state,
    setTransition: (transition, timeout) => new Promise(
      function(resolve, reject) {
        resolve(dispatch({
          type: 'setTransition',
          value: { transition, timeout },
          dispatch
        }))
      }
    ),
    endTransition: () => dispatch({type: 'endTransition'})
  }

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
 * The context provider for `<Link />`. Allow link to change transition on
 * click, before the routing. This makes possible to build as many different
 * transitions for the same route as possible, all evaluated on the fly.
 *
 * @example
 * import { BrowserRouter as Router} from "react-router-dom";
 *
 * import {
 *   Navigation,
 *   Route,
 *   Screen,
 *   Link,
 * } from "react-tiger-transition";
 *
 * // Don't forget to import styles!
 * import "react-tiger-transition/style.css";
 *
 * ...
 * <div id='root' style={{height: '100vh'}}>
 *   <Router>
 *     <Navigation>
 *
 *       ... my routes ...
 *
 *     </Navigation>
 *   </Router>
 * </div>
 * ...
 *
 *
 */
const Navigation = ({
  children,
  containerProps,

  defaultTransition,
  firstTimeout,
  globalTransitionProps,
  ...other,
}) => (
  <Screen container {...containerProps}>
    <NavigationProvider
      {...other}
      initialState={{
          transition: evalTransition({
            transition: defaultTransition,
            timeout: firstTimeout
          }),
          currentTransition: null,
          onTransition: false,
          defaultTransition,
          globalTransitionProps,
      }}
    >
        {children}
    </NavigationProvider>
  </Screen>
)

Navigation.defaultProps = {
  defaultTransition: fade,
  defaultRoute: <Redirect to='/' />,
  globalTransitionProps: {},
  firstTimeout: 600,
};

Navigation.propTypes = {
  /**
   * Props passed to `<Screen container />` (that wraps the routes).
   */
   containerProps: PropTypes.object,

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

  /**
   * First transition timeout in milliseconds. Used only on appearing (if set),
   * and only if you are using a css transition. If you are using an object
   * or function returning an transition with timeout, this firstTimeout is
   * ignored.
   */
  firstTimeout: PropTypes.number,
}

export default Navigation
