import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 25px;
`;
const activeClassName = 'active-link';
export const Setting = styled(NavLink).attrs({ activeClassName })`
  font-size: 20px;
  line-height: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  padding-inline: 8px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 5px;
    z-index: -1;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.color.primary};
    opacity: 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${({ theme }) => theme.color.secondary};
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 20px;
  }
  &.${activeClassName} {
    opacity: 1;
    &::before {
      opacity: 1;
    }
  }
  &:hover {
    opacity: 1;
  }
`;
export const Link = styled.a`
  font-size: 20px;
  line-height: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
