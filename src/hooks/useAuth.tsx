import React, { useState, useEffect, useContext } from 'react';
import { useError } from './useError';
import { auth } from '../firebase';

interface props {
  children: React.ReactNode;
}

interface ContextProps {
  currentUser: unknown;
  signIn: (login: string, password: string) => Promise<unknown>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = React.createContext<Partial<ContextProps>>({});

const AuthProvider = ({ children }: props): JSX.Element => {
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = (login: string, password: string) => auth.signInWithEmailAndPassword(login, password);
  const signOut = () => auth.signOut();
  const resetPassword = (email: string) => auth.sendPasswordResetEmail(email);

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
