import React from 'react';
import { useState } from 'react';
export const ErrorContext = React.createContext({
  error: false,
  onError: value => {},
});
export const ErrorContextProvider = props => {
  const [error, setError] = useState(false);

  const setErrorHandler = value => {
    setError(value);
  };
  return (
    <ErrorContext.Provider value={{ error: error, onError: setErrorHandler }}>
      {props.children}
    </ErrorContext.Provider>
  );
};
