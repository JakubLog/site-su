import React from 'react';
import { Wrapper, Site } from './MainTemplate.styles';
import Navigation from 'components/molecules/Navigation/Navigation';
import Footer from 'components/molecules/Footer/Footer';

// eslint-disable-next-line react/prop-types
const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Site>{children}</Site>
      <Footer />
    </Wrapper>
  );
};

export default MainTemplate;
