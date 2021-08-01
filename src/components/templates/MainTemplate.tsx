import React from 'react';
import { Wrapper, Site, Footer } from './MainTemplate.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

interface props {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: props): JSX.Element => {
  return (
    <Wrapper>
      <Navigation />
      <Site>{children}</Site>
      <Footer>
        <span id="first">Szkoła Podstawowa Nr. 3 w Środzie Śląskiej</span>
        <span id="second">2021 &copy; All rights reserved</span>
      </Footer>
    </Wrapper>
  );
};

export default MainTemplate;
