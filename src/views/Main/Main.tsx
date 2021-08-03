import React, { useEffect, useState } from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import Gallery from 'components/organisms/Gallery/Gallery';
import styled from 'styled-components';
import Forms from 'components/organisms/Forms/Forms';

export const FormsWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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

  const forms = [
    {
      id: '@32234',
      title: 'Title of form a long title lol...',
      link: 'https://tally.so/r/npOqqw'
    },
    {
      id: '@32dfs234',
      title: 'Title of form a long title xd...',
      link: 'https://tally.so/r/npOqqw'
    },
    {
      id: '@3223fdsfds4',
      title: 'Title of form a long title asdsadsa...',
      link: 'https://tally.so/r/npOqqw'
    }
  ];

  return (
    <>
      <Hero />
      <Section label="news" title="Z życia szkoły">
        <Gallery array={array} />
      </Section>
      <Section label="forms" title="Aktywne ankiety">
        <Forms array={forms} />
      </Section>
    </>
  );
};

export default Main;
