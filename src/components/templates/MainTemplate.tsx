import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 65px;
`;
export const NavBody = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 25px;
`;
export const NavLogo = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;
export const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  min-height: 30px;
  border-bottom: 3px solid ${({ theme }) => theme.color.primary};
  z-index: 10;
  background-color: ${({ theme }) => theme.color.secondary};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
`;
const activeClassName = 'active-link';
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s background-color ease-in-out, opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  opacity: 0.6;
  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryDarken};
    cursor: pointer;
  }
  &.${activeClassName} {
    opacity: 1;
  }
`;
export const NavTheme = styled.label`
  width: 70px;
  height: 30px;
  position: absolute;
  top: 105px;
  right: 10px;
  z-index: 100;
`;
export const ThemeSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.primary};
  width: 100%;
  height: 100%;
  border-radius: 25px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.secondary};
    border-radius: 50%;
    transition: 0.3s transform ease-in-out;
  }
  &::after {
    content: 'Change theme';
    position: absolute;
    left: -165%;
    top: 50%;
    color: ${({ theme }) => theme.color.primary};
    transform: translateY(-50%);
  }
`;
export const ThemeInput = styled.input`
  width: 0;
  height: 0;
  &:checked + ${ThemeSlider}::before {
    transform: translateX(195%);
  }
`;
export const Site = styled.div`
  padding-top: 80px;
  padding-inline: 20px;
`;
export const Footer = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 25px;
  border-top: 5px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  * {
    opacity: 0.8;
  }
  #first {
    font-size: 18px;
  }
  #second {
    font-size: 14px;
  }
`;

interface props {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: props): JSX.Element => {
  return (
    <Wrapper>
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
      <Site>{children}</Site>
      <Footer>
        <span id="first">Szkoła Podstawowa Nr. 3 w Środzie Śląskiej</span>
        <span id="second">2021 &copy; All rights reserved</span>
      </Footer>
    </Wrapper>
  );
};

export default MainTemplate;
