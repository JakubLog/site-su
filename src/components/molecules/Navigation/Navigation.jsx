import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, NavBody, NavLogo, NavItems, NavItem, NavTheme, ThemeInput, ThemeSlider } from './Navigation.styles';
import { toggleTheme } from 'store/store';
import gsap from 'gsap';
import { createRef } from 'react';

const Navigation = () => {
  const dispatch = useDispatch();

  const logo = useRef(null);
  const navItems = useRef([createRef(), createRef(), createRef()]);
  const switchInput = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    const items = navItems.current.map((item) => item.current);

    tl.set(logo.current, { visibility: 'visible' }).set(items, { visibility: 'visible' }).set(switchInput.current, { visibility: 'visible' });

    tl.addLabel('Navbar')
      .from(logo.current, { duration: 2, opacity: 0, x: -50 })
      .from(items, { duration: 1, opacity: 0, y: -15, stagger: 0.2 }, 'Navbar')
      .from(switchInput.current, { duration: 2, opacity: 0, x: 50 }, 'Navbar');
  }, []);

  return (
    <Navbar>
      <NavBody>
        <NavLogo ref={logo}>Samorząd Uczniowski</NavLogo>
        <NavItems>
          <div style={{ visibility: 'hidden' }} ref={navItems.current[0]}>
            <NavItem exact to="/">
              Home
            </NavItem>
          </div>
          <div style={{ visibility: 'hidden' }} ref={navItems.current[1]}>
            <NavItem to="/posts">Posts</NavItem>
          </div>
          <div style={{ visibility: 'hidden' }} ref={navItems.current[2]}>
            <NavItem to="/signin">Sign in</NavItem>
          </div>
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
