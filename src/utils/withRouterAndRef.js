import React from 'react';
import { withRouter } from 'react-router-dom';

// solution from:
// https://stackoverflow.com/questions/52097564/forward-ref-through-react-routers-withrouter-hoc

export const withRouterAndRef = Wrapped => {
  const WithRouter = withRouter(({ forwardRef, ...otherProps }) => (
    <Wrapped ref={forwardRef} {...otherProps} />
  ));
  const WithRouterAndRef = React.forwardRef((props, ref) => (
    <WithRouter {...props} forwardRef={ref} />
  ));
  const name = Wrapped.displayName || Wrapped.name;
  WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
  return WithRouterAndRef;
};
