import React, { useEffect, useRef } from 'react';
import { HeroWrapper, HeroTitle, HeroSubtitle } from './Hero.styles';
import { Button } from 'components/atoms/Button/Button';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, { visibility: 'visible' });
    gsap.set(subtitleRef.current, { visibility: 'visible' });
    gsap.set(buttonRef.current, { visibility: 'visible' });

    if (window.innerWidth >= 1350) {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(titleRef.current, { duration: 1.5, opacity: 0, y: 50 })
        .from(subtitleRef.current, { opacity: 0, duration: 1.5, y: 50 }, '-=1')
        .from(buttonRef.current, { opacity: 0, duration: 1.5, y: 50 }, '-=1');
    }
  }, []);

  return (
    <>
      <HeroWrapper>
        <HeroTitle ref={titleRef}>Samorząd Uczniowski</HeroTitle>
        <HeroSubtitle ref={subtitleRef}>Od uczniów dla uczniów...</HeroSubtitle>
        <a href="#news" style={{ textDecoration: 'none' }}>
          <Button style={{ visibility: 'hidden' }} variant="contained" ref={buttonRef}>
            Najnowsze wydarzenia
          </Button>
        </a>
      </HeroWrapper>
    </>
  );
};

export default Hero;
