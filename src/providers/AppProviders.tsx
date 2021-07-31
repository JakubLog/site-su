import { GlobalStyles } from 'assets/css/GlobalStyles';
import { light } from 'assets/css/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: props): JSX.Element => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProviders;
