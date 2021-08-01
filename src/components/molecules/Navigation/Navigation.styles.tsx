import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  height: 65px;
  @media (min-width: 1350px) {
    height: 100px;
  }
`;
export const NavBody = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 5px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 60px;
  @media (min-width: 1350px) {
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
export const NavLogo = styled.h1`
  font-size: 22px;
  font-weight: 700;
  @media (min-width: 1350px) {
    font-size: 30px;
  }
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
  @media (min-width: 1350px) {
    position: static;
    border: 0;
    width: auto;
    height: auto;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 200px;
  }
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
  @media (min-width: 1350px) {
    width: auto;
    height: auto;
    font-size: 18px;
    margin: 0 15px;
    padding: 5px;
    transition: 0.3s transform ease-in-out, opacity 0.2s ease-in-out;
    &:hover {
      background-color: transparent;
      opacity: 1;
      transform: translateY(-10px);
    }
  }
`;
export const NavTheme = styled.label`
  width: 70px;
  height: 30px;
  position: absolute;
  top: 105px;
  right: 10px;
  z-index: 100;
  @media (min-width: 1350px) {
    position: relative;
    top: 0;
    right: 0;
  }
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
