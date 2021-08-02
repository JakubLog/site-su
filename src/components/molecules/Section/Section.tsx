import React from 'react';
import { Wrapper, Title, Body } from './Section.styles';

interface props {
  title?: string;
  children: React.ReactNode;
}

const Section = ({ title = 'Basic title', children }: props): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Section;
