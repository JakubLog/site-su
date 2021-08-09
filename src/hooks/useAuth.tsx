import React, { useState, useEffect, useContext } from 'react';
import { useError } from './useError';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

// TypeScript interfaces & definitions
interface props {
  children: React.ReactNode;
}

interface ContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentUser: any;
  signIn: (login: string, password: string) => Promise<unknown>;
  signOut: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = React.createContext<Partial<ContextProps>>({});

const AuthProvider = ({ children }: props): JSX.Element => {
  // Global states and variables
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  // Auth methods
  const signIn = (login: string, password: string) => auth.signInWithEmailAndPassword(login, password);
  const signOut = () => {
    auth.signOut();
    history.push('/');
  };
  const resetPassword = (email: string) => auth.sendPasswordResetEmail(email);

  // User auth control event
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoadingState(false);
    });
    return unsubscribe;
  });

  const value = {
    currentUser,
    signIn,
    signOut,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{isLoading ? <p>Loading Auth...</p> : children}</AuthContext.Provider>;
};

export const useAuth = (): Partial<ContextProps> => {
  const { dispatchError } = useError();

  const auth = useContext(AuthContext);
  if (!auth) return dispatchError('Authorization mechanics are not available now, please contact with support!');
  return auth;
};

export default AuthProvider;
