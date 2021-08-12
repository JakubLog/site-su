import React from 'react';
import Gallery from './Gallery';

const object = {
  title: 'components/organisms/Gallery',
  component: Gallery
};

export default object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const template = (args: any) => (
  <Gallery
    array={[
      { id: 1, title: 'Title', description: 'Description', src: { url: 'https://picsum.photos/1000' } },
      { id: 2, title: 'Title', description: 'Description', src: { url: 'https://picsum.photos/1000' } },
      { id: 3, title: 'Title', description: 'Description', src: { url: 'https://picsum.photos/1000' } },
      { id: 4, title: 'Title', description: 'Description', src: { url: 'https://picsum.photos/1000' } },
      { id: 5, title: 'Title', description: 'Description', src: { url: 'https://picsum.photos/1000' } }
    ]}
    {...args}
  />
);

export const primary = template.bind({});
