import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, NavBody, NavLogo, NavItems, NavItem, NavTheme, ThemeInput, ThemeSlider } from './Navigation.styles';
import { toggleTheme } from 'store/store';

const Navigation = (): JSX.Element => {
  const dispatch = useDispatch();
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
          <ThemeInput onClick={() => dispatch(toggleTheme({}))} type="checkbox" />
          <ThemeSlider />
        </NavTheme>
      </NavBody>
    </Navbar>
  );
};

export default Navigation;
