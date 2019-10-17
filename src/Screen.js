import React from 'react';
import PropTypes from 'prop-types';

import { computeClassName } from './utils';

/**
 * @description
 * A div with some default css applied to it. Designed to be child of `routes`,
 * or parent if passed the `container` prop.
 *
 * @afterProps
 * \*Ref and other props are passed to div container.
 *
 * @example
 * import { Screen } from 'react-tiger-transition';
 *
 * <Screen>
 *  ...my page...
 * </Screen>
 *
 */
const Screen = React.forwardRef(({
  children,
  className,
  disableStyle,
  container,
  ...other
}, ref) => {

  const _className = computeClassName(
    disableStyle,
    className,
    `react-tiger-transition--${container ? 'container' : 'screen'}`
  )

  return (
    <div
      ref={ref}
      className={_className}
      {...other}
    >
      {children}
    </div>
  )
})


Screen.defaultProps = {
  disableStyle: false,
  container: false,
}

Screen.propTypes = {
  /**
   * Transform it into a container to wrap routes. `<Navigation />` already
   * does that, but maybe you want it to create an extra container.
   */
  container: PropTypes.bool,

  /**
   * Disable default styles applied to div container. You can
   * still use className to set your own styles.
   */
  disableStyle: PropTypes.bool,

  /**
   * Div container className. A string or a function returning a string.
   * If not disableStyle, this className will be chained to
   * `react-tiger-transition--screen`.
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
}

export default Screen
