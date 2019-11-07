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
      : typeof (transition) === 'string'
        ? { timeout, classNames: transition }
        : { timeout: 0, classNames: '' }
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

const globalTransitionPropsDefaultValues = {
  unmountOnExit: true,
  timeout: 600,
};

/**
 *
 * @description
 * The context provider for [`<Link />`](/docs/link). Allow link to change
 * transition on click, before the routing. This makes possible to build as
 * many different transitions for the same route as possible, all evaluated
 * on the fly.
 *
 */
const Navigation = ({
  children, // eslint-disable-line react/prop-types
  containerProps,
  globalTransitionProps,
  ...other
}) => (
  <Screen container {...containerProps}>
    <NavigationProvider
      {...other}
      initialState={{
        transition: evalTransition({
          transition: globalTransitionProps.classNames,
          timeout: globalTransitionProps.timeout
        }),
        currentTransition: null,
        onTransition: false,
        globalTransitionProps: {
          ...globalTransitionPropsDefaultValues,
          ...globalTransitionProps,
        },
      }}
    >
      {children}
    </NavigationProvider>
  </Screen>
);

Navigation.defaultProps = {
  defaultRoute: <Redirect to='/' />,
  globalTransitionProps: globalTransitionPropsDefaultValues,
  disableDefaultRoute: false,
};

Navigation.propTypes = {
  /**
   * Props passed to [`<Screen container />`](/docs/screen) (that wraps the
   * routes).
   *
   * ```javascript
   * <Navigation
   *    containerProps={{
   *      className: 'my-custom-class-name'
   *    }}
   * >
   *    ...
   * </Navigation>
   * ```
   */
  containerProps: PropTypes.object,

  /**
   * Default props passed to all [`<CSSTransition />`](https://reactcommunity.org/react-transition-group/css-transition).
   *
   * Use it to define a default transition:
   *
   * ```javascript
   * <Navigation
   *    globalTransitionProps={{
   *      ...props,
   *      timeout: 600,
   *      classNames: 'fade'
   *    }}
   * >
   *    ...
   * </Navigation>
   * ```
   *
   * `transitionProps` defined in [`<Route>`](/docs/route) have higher priority.
   */
  globalTransitionProps: PropTypes.object,

  /**
   * A route that matches when all routes do not. Default is
   * [`<Redirect to='/' />`](https://reacttraining.com/react-router/web/api/Redirect).
   *
   * ```javascript
   * <Navigation defaultRoute={<Redirect to='/home' />}>...</Navigation>
   * ```
   */
  defaultRoute: PropTypes.element,

  /**
   * Disable default route.
   */
  disableDefaultRoute: PropTypes.bool,
};

export default Navigation;
