import React from 'react';
import { GlobalStyles } from 'assets/css/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { light, dark } from 'assets/css/theme';
import ErrorProvider from 'hooks/useError';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import MembersProvider from 'hooks/useMembers';
import ModalProvider from 'hooks/useModal';
import AuthProvider from 'hooks/useAuth';

// TypeScript interfaces & definitions
interface props {
  children: React.ReactNode;
}

const client = new GraphQLClient({
  url: 'https://api-eu-central-1.graphcms.com/v2/ckrvpslmn05ne01z8156yd2th/master'
});

const AppProviders = ({ children }: props): JSX.Element => {
  // Two lines below are getting from redux actual Theme State
  // and using this information for theme toggling.
  const themeName = useSelector<RootState>((state) => state.theme);
  const getTheme = () => (themeName === 'light' ? light : dark);

  return (
    <Router>
      <ErrorProvider>
        <MembersProvider>
          <AuthProvider>
            <ModalProvider>
              <ClientContext.Provider value={client}>
                <ThemeProvider theme={getTheme}>
                  <GlobalStyles />
                  {children}
                </ThemeProvider>
              </ClientContext.Provider>
            </ModalProvider>
          </AuthProvider>
        </MembersProvider>
      </ErrorProvider>
    </Router>
  );
};

export default AppProviders;
