import React, { useState, useEffect, useMemo } from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fade } from './tigers';

export const NavigationContext = React.createContext();


const NavigationProvider = withRouter(({
  children,
  defaultTransition,
  defaultRoute,
  disableBodyStyle,
  disableRootStyle,
  rootNodeId,

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
    defaultTransition: defaultTransition
  }

  useEffect(() => {
    if (!disableBodyStyle){
      document.body.classList.add('react-tiger-transition--body');
    }
    if (!disableRootStyle){
      document.getElementById(rootNodeId).classList.add('react-tiger-transition--root');
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

const Navigation = ({
  children,
  ...other,
}) => (
  <NavigationProvider {...other}>
    {children}
  </NavigationProvider>
)

Navigation.defaultProps = {
  defaultTransition: fade,
  defaultRoute: <Redirect to='/' />,
  disableBodyStyle: false,
  disableRootStyle: false,
  rootNodeId: 'root',
};

Navigation.propTypes = {
  /**
   *  Root node id, used to apply style to it.
   */
  rootNodeId: PropTypes.string,

  /**
   * Disable default style applied to body.
   */
  disableBodyStyle: PropTypes.bool,

  /**
   * Disable default style applied to root node.
   */
  disableRootStyle: PropTypes.bool,

  /**
   * The default transition to be consumed by every <Link /> component that
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
   * A route that matches when all routes do not. Default is
   * Redirect component from react-router-dom.
   */
  defaultRoute: PropTypes.element,
}

export default Navigation
