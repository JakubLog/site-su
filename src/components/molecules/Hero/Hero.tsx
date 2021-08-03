import React from 'react';
import { HeroWrapper, HeroTitle, HeroSubtitle } from './Hero.styles';
import { Button } from 'components/atoms/Button/Button';

const Hero = (): JSX.Element => {
  return (
    <>
      <HeroWrapper>
        <HeroTitle>Samorząd Uczniowski</HeroTitle>
        <HeroSubtitle>Od uczniów dla uczniów...</HeroSubtitle>
        <a href="#news" style={{ textDecoration: 'none' }}>
          <Button variant="contained">Najnowsze wydarzenia</Button>
        </a>
      </HeroWrapper>
    </>
  );
};

export default Hero;
