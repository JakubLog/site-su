// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, NavBody, NavLogo, NavItems, LogoLink, ItemWrapper, NavItem, NavTheme, ThemeInput, ThemeSlider } from './Navigation.styles';
import { toggleTheme } from 'store/store';
import { gsap } from 'gsap';
import { createRef } from 'react';
import { useAuth } from 'hooks/useAuth';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Navigation = () => {
  // Global States
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  // React refs
  const logo = useRef(null);
  const navItems = useRef([createRef(), createRef(), createRef()]);
  const switchInput = useRef(null);

  // GSAP Animations
  useEffect(() => {
    const items = navItems.current.map((item) => item.current);

    gsap.set(logo.current, { visibility: 'visible' });
    gsap.set(items, { visibility: 'visible' });
    gsap.set(switchInput.current, { visibility: 'visible' });
    if (window.innerWidth > 1350) {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.addLabel('Navbar')
        .from(logo.current, { duration: 2, opacity: 0, x: -50 })
        .from(items, { duration: 1, opacity: 0, y: -15, stagger: 0.2 }, 'Navbar')
        .from(switchInput.current, { duration: 2, opacity: 0, x: 50 }, 'Navbar');
    }
  }, []);

  return (
    <Navbar>
      <NavBody>
        <LogoLink to="/">
          <NavLogo ref={logo}>Samorząd Uczniowski</NavLogo>
        </LogoLink>
        <NavItems>
          <ItemWrapper ref={navItems.current[0]}>
            <NavItem exact to="/">
              Home
            </NavItem>
          </ItemWrapper>
          <ItemWrapper ref={navItems.current[1]}>
            <NavItem to="/members">Members</NavItem>
          </ItemWrapper>
          <ItemWrapper ref={navItems.current[2]}>
            {currentUser ? <NavItem to="/dashboard">Dashboard</NavItem> : <NavItem to="/signin">Sign in</NavItem>}
          </ItemWrapper>
        </NavItems>
        <NavTheme ref={switchInput}>
          <ThemeInput onClick={() => dispatch(toggleTheme({}))} type="checkbox" />
          <ThemeSlider />
        </NavTheme>
      </NavBody>
    </Navbar>
  );
};

export default Navigation;
