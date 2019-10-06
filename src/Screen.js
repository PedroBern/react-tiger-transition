import React from 'react';

const Screen = React.forwardRef(({
  children,
  className,
  ...other
}, ref) => {

  return (
    <div
      ref={ref}
      className={className}
      {...other}
    >
      {children}
    </div>
  )
})


Screen.defaultProps = {
  className: 'react-tiger-transition--screen',
}

export default Screen
