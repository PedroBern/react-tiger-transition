import React, { useReducer, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { reducer, initialState } from './reducer';

export const DemoContext = React.createContext();

const DemoProvider = ({
  children,
  match,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DemoContext.Provider
      value={{
        ...state,
        updateTiger: value => dispatch({type: 'updateTiger', value}),
        onBeforeChange: value => dispatch({type: 'onBeforeChange', value}),
        onChange: value => dispatch({type: 'onChange', value}),
        updateDemoTimeout: value => dispatch({type: 'updateDemoTimeout', value})
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export default withRouter(DemoProvider);
