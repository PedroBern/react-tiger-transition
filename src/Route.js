import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouterRoute } from "react-router-dom";

import Transition from './Transition';

const Route = ({
  children,
  timeout,
  className,
  containerProps,
  ...other,
}) => {

  return (
    <RouterRoute {...other}>
      {props => (
        <Transition
          match={props.match}
          timeout={timeout}
          className={className}
          containerProps={containerProps}
        >
          {children}
        </Transition>
      )}
    </RouterRoute>
  )
}

Route.defaultProps = {
  timeout: 600,
  className: 'react-tiger-transition--route',
};

Route.propTypes = {
  /**
   *  Propably your 'page' component. I recommend you to use <Screen />
   *  to wrap your pages.
   */
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  /**
   *  Transition timeout in milliseconds. Used only on CSS transitions. If using an object or
   *  a function for 'transition' prop from <Link />, should return the
   *  timeout there.
   */
  timeout: PropTypes.number,
  /**
   * Div container className.
   */
  className: PropTypes.string,
  /**
   *  Props passed to div container.
   */
  containerProps: PropTypes.object,
}

export default Route
