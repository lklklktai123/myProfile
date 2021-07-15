import React from 'react';
import { useState } from 'react';
export const ErrorContext = React.createContext({
  error: false,
  onError: value => {},
  statusIcon: true,
  toggleIcon: value => {},
  isVn: false,
  cvIsVn: value => {},
});
export const ErrorContextProvider = props => {
  const [error, setError] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [isVn, setIsVn] = useState(false);

  const setErrorHandler = value => {
    setError(value);
  };
  const setStatusIcon = value => {
    setToggleIcon(value);
  };
  const setISVnHandler = value => {
    setIsVn(value);
  };
  return (
    <ErrorContext.Provider
      value={{
        error: error,
        onError: setErrorHandler,
        statusIcon: toggleIcon,
        toggleIcon: setStatusIcon,
        isVn: isVn,
        cvIsVn: setISVnHandler,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};
