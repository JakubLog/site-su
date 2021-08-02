import React, { useState, useContext } from 'react';

const ErrorContext = React.createContext({});

interface props {
  children: React.ReactNode;
}

const ErrorProvider = ({ children }: props): JSX.Element => {
  const [error, setError] = useState(null);

  const dispatchError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError(null);
    }, 7500);
  };

  const value = {
    error,
    dispatchError
  };
  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};

export default ErrorProvider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useError = (): any => {
  const error = useContext(ErrorContext);
  if (!error) return console.error('Error service is down! Contact with support!');
  return error;
};
