import React from 'react';
import { Wrapper, Title, Body } from './Section.styles';

interface props {
  title?: string;
  label?: string;
  children: React.ReactNode;
}

const Section = ({ title = 'Basic title', label, children }: props): JSX.Element => {
  return (
    <Wrapper aria-label={`Section named ${label}`} id={label}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Section;
