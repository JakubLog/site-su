import { GlobalStyles } from 'assets/css/GlobalStyles';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { light, dark } from 'assets/css/theme';

interface props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: props): JSX.Element => {
  const themeName = useSelector<RootState>((state) => state.theme);

  const getTheme = () => {
    console.log(themeName);
    if (themeName === 'light') return light;
    if (themeName === 'dark') return dark;
  };

  return (
    <Router>
      <ThemeProvider theme={getTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
