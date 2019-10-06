import React from 'react';

import classNames from 'classnames';

const Screen = React.forwardRef((props, ref) => {

  const {
    children,
    className,
    disableCSS,
    ...other
  } = props;

  return (
    <div
      ref={ref}
      className={classNames(
        {'react-tiger-transition--screen': !disableCSS},
        className
      )}
      {...other}
    >
      {children}
    </div>
  )
})


Screen.defaultProps = {
  className: null,
  disableCSS: false,
}

export default Screen
