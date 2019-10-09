import React from 'react';
import PropTypes from 'prop-types';

import { computeClassName } from './utils';

/**
 * @description
 * Div container for your pages. Designed to be child of `<Route />`, but
 * you can always use your own page component wrapper.
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
  ...other
}, ref) => {

  const _className = computeClassName(
    disableStyle,
    className,
    'react-tiger-transition--screen'
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
}

Screen.propTypes = {
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
