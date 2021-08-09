import React, { useState, useContext } from 'react';

// TypeScript interfaces & definitions
interface props {
  children: React.ReactNode;
}

const ErrorContext = React.createContext({});

const ErrorProvider = ({ children }: props): JSX.Element => {
  // Global states and variables
  const [error, setError] = useState(null);

  // Error methods
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
