import React, { useState, useEffect, useMemo } from 'react';
import { withRouter, matchPath, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fade } from './tigers';

export const NavigationContext = React.createContext();


const NavigationProvider = withRouter(({
  children,
  defaultTransition,
  defaultRoute,
  bodyClassName,
  rootClassName,
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
    document.body.classList.add(bodyClassName);
    document.getElementById(rootNodeId).classList.add(rootClassName);

    return () => {
      document.body.classList.remove(bodyClassName);
      document.getElementById(rootNodeId).classList.remove(rootClassName);
    };
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
  defaultTransition: () => fade({backgroundColor: 'white'}),
  defaultRoute: <Redirect to='/' />,
  bodyClassName: 'react-tiger-transition--body',
  rootNodeId: 'root',
  rootClassName: 'react-tiger-transition--root',
};

Navigation.propTypes = {
  defaultTransition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  defaultRoute: PropTypes.element,
  bodyClassName: PropTypes.string,
  rootNodeId: PropTypes.string,
  rootClassName: PropTypes.string
}

export default Navigation
