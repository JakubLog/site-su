import React from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import Gallery from 'components/organisms/Gallery/Gallery';

const Main = (): JSX.Element => {
  const array = [
    {
      id: '2213jifdis',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
      src: 'https://picsum.photos/500'
    },
    {
      id: 'hfgfhfg3jifdis',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
      src: 'https://picsum.photos/500'
    },
    {
      id: '22hfhfgfifdis',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
      src: 'https://picsum.photos/500'
    },
    {
      id: '2ghifdis',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
      src: 'https://picsum.photos/500'
    },
    {
      id: '2213jifgd',
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet',
      src: 'https://picsum.photos/500'
    }
  ];

  return (
    <>
      <Hero />
      <Section label="news" title="Z życia szkoły">
        <Gallery array={array} />
      </Section>
      <Section label="forms" title="Aktywne ankiety">
        Hello from section body
      </Section>
    </>
  );
};

export default Main;
