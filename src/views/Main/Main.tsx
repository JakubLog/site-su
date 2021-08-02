import React from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';

const Main = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Section title="Z życia szkoły">Hello from section body</Section>
      <Section title="Aktywne ankiety">Hello from section body</Section>
    </>
  );
};

export default Main;
