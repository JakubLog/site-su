import React from 'react';
import { Navbar, NavBody, NavLogo, NavItems, NavItem, NavTheme, ThemeInput, ThemeSlider } from './Navigation.styles';

const Navigation = (): JSX.Element => {
  return (
    <Navbar>
      <NavBody>
        <NavLogo>Samorząd Uczniowski</NavLogo>
        <NavItems>
          <NavItem exact to="/">
            Home
          </NavItem>
          <NavItem to="/posts">Posts</NavItem>
          <NavItem to="/signin">Sign in</NavItem>
        </NavItems>
        <NavTheme>
          <ThemeInput type="checkbox" />
          <ThemeSlider />
        </NavTheme>
      </NavBody>
    </Navbar>
  );
};

export default Navigation;
