import { GlobalStyles } from 'assets/css/GlobalStyles';
import { light } from 'assets/css/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

interface props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: props): JSX.Element => {
  return (
    <Router>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
