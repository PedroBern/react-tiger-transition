export const computeClassName = (disable, className, defaultClassName) => (disable
  ? typeof className === 'string' ? className
    : typeof className === 'function' ? className()
      : ''
  : typeof className === 'string' ? `${defaultClassName} ${className}`
    : typeof className === 'function' ? `${defaultClassName}  ${className()}`
      : defaultClassName);
