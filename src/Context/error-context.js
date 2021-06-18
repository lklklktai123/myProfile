import React from 'react';
import { useState } from 'react';
export const ErrorContext = React.createContext({
  error: false,
  onError: value => {},
  statusIcon: true,
  toggleIcon: value => {},
});
export const ErrorContextProvider = props => {
  const [error, setError] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);

  const setErrorHandler = value => {
    setError(value);
  };
  const setStatusIcon = value => {
    setToggleIcon(value);
  };
  return (
    <ErrorContext.Provider
      value={{
        error: error,
        onError: setErrorHandler,
        statusIcon: toggleIcon,
        toggleIcon: setStatusIcon,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};
