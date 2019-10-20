import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';

export const DemoContext = React.createContext();

const DemoProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DemoContext.Provider
      value={{
        ...state,
        updateTiger: value => dispatch({type: 'updateTiger', value}),
        onBeforeChange: value => dispatch({type: 'onBeforeChange', value}),
        onChange: value => dispatch({type: 'onChange', value}),
        onChangeFromObj: value => dispatch({type: 'onChangeFromObj', value})
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export default DemoProvider
