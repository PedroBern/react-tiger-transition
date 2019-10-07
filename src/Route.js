import React from 'react';
import PropTypes from 'prop-types';
import { Route as RouterRoute } from "react-router-dom";

import { computeClassName } from './utils';
import Transition from './Transition';

const Route = ({
  children,
  timeout,
  className,
  disableStyle,
  containerProps,
  transitionProps,
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
          {children}
        </Transition>
      )}
    </RouterRoute>
  )
}

Route.defaultProps = {
  timeout: 600,
  disableStyle: false,
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
   *  Transition timeout in milliseconds. Used only on CSS transitions.
   *  If using an object or a function for 'transition' prop from
   *  <Link />, should return the
   *  timeout there.
   */
  timeout: PropTypes.number,

  /**
   *  Disable default styles applied to div container. You can
   *  still use className to set your own styles.
   */
  disableStyle: PropTypes.bool,

  /**
   *  Div container className. A string or a function returning a string.
   *  If not disableStyle, this className will be chained to
   *  'react-tiger-transition--route'.
   */
   className: PropTypes.oneOfType([
     PropTypes.string,
     PropTypes.func,
   ]),

 /**
  *  Props passed to <Transition /> or <CSSTransition /> from
  *  react-transition-group. Usually you don't need to worry about this.
  *  If you pass appear=true, the appearing animation is the default one defined
  *  in <Navigation />
  */
 transitionProps: PropTypes.object,

  /**
   *  Props passed to div container.
   */
  containerProps: PropTypes.object,
}

export default Route
