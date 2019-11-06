import React, { useMemo, useReducer } from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import Screen from './Screen';

export const NavigationContext = React.createContext();

export const evalTransition = ({ transition, timeout }) => (
  typeof (transition) === 'function'
    ? { timeout, ...transition() }
    : Object.prototype.toString.call(transition) === '[object Object]'
      ? { timeout, ...transition }
      : { timeout, classNames: transition }
);

export function reducer(state, action) {
  switch (action.type) {

    case 'setTransition': {
      const transition = evalTransition({ ...action.value });
      window.setTimeout(() => {
        action.dispatch({ type: 'endTransition' });
      }, transition.timeout + 200);
      return {
        ...state,
        transition,
        onTransition: true,
      };
    }

    case 'endTransition': {
      return {
        ...state,
        onTransition: false,
      };
    }

    default: {
      return { ...state };
    }
  }
}

const NavigationProvider = withRouter(({
  children,
  defaultRoute,
  initialState,
  disableDefaultRoute,

  match,
  location
}) => {

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    setTransition: (transition, timeout) => new Promise(
      ((resolve) => {
        resolve(dispatch({
          type: 'setTransition',
          value: { transition, timeout },
          dispatch
        }));
      })
    ),
  });

  const matched = useMemo(() => {
    let computeMatch;

    React.Children.forEach(children, child => {
      if (computeMatch == null && React.isValidElement(child)) {
        const path = child.props.path || child.props.from || null;
        computeMatch = path
          ? matchPath(location.pathname, { ...child.props, path })
          : null;
      }
    });

    return computeMatch != null;
  }, [children, location, match]);

  return (
    <NavigationContext.Provider value={{ ...state }}>
      {children}
      {!disableDefaultRoute && !matched && defaultRoute}
    </NavigationContext.Provider>
  );
});

/**
 *
 * @description
 * The context provider for [`<Link />`](/docs/link). Allow link to change
 * transition on click, before the routing. This makes possible to build as
 * many different transitions for the same route as possible, all evaluated
 * on the fly.
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
 * <div id='root' style={{height: '100vh'}}>
 *   <Router>
 *     <Navigation>
 *
 *       { MyRoutes }
 *
 *     </Navigation>
 *   </Router>
 * </div>
 *
 *
 */
const Navigation = ({
  children, // eslint-disable-line react/prop-types
  containerProps,

  defaultTransition,
  firstTimeout,
  globalTransitionProps,
  ...other
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
);

Navigation.defaultProps = {
  defaultRoute: <Redirect to='/' />,
  globalTransitionProps: {},
  firstTimeout: 600,
  disableDefaultRoute: false,
};

Navigation.propTypes = {
  /**
   * Props passed to [`<Screen container />`](/docs/screen) (that wraps the
   * routes).
   */
  containerProps: PropTypes.object,

  /**
   * The default transition to be consumed by every [`<Link />`](/docs/link)
   * component that transition prop is not defined. Good if you want the same
   * transition for all routes, or most of them. Use string if you have your
   * own css animation, or an object or function returning an object to be
   * passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
   * and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
   */
  defaultTransition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,

  /**
   * Props passed to [`<Transition />`](https://reactcommunity.org/react-transition-group/transition)
   * and [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
   * Usually you don't need to worry about this. If you pass `appear`, the
   * appearing animation is the `defaultTransition` prop, unless defined a
   * `forceTransition` prop in [`<Route>`](/docs/route).
   */
  globalTransitionProps: PropTypes.object,

  /**
   * A route that matches when all routes do not. Default is
   * [`<Redirect to='/' />`](https://reacttraining.com/react-router/web/api/Redirect).
   */
  defaultRoute: PropTypes.element,

  /**
   * Disable default route.
   */
  disableDefaultRoute: PropTypes.bool,

  /**
   * First transition timeout in milliseconds. Used only on appearing (if set),
   * and only if you are using a css transition. If you are using an object
   * or function returning an transition with timeout, this `firstTimeout` is
   * ignored.
   */
  firstTimeout: PropTypes.number,

};

export default Navigation;
