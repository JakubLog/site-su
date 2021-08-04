import React from 'react';
import { Wrapper, Site } from './MainTemplate.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import Footer from 'components/molecules/Footer/Footer';

interface props {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: props): JSX.Element => {
  return (
    <Wrapper>
      <Navigation />
      <Site>{children}</Site>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
