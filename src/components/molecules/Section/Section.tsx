import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Body } from './Section.styles';

interface props {
  title?: string;
  label?: string;
}

// eslint-disable-next-line react/prop-types
const Section: React.FC<props> = ({ title = 'Section title', label, children }) => {
  return (
    <Wrapper aria-label={`Section named ${label}`} id={label}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Section;
