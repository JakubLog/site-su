import React from 'react';
import { GalleryWrapper } from './Gallery.styles';
import GalleryItem from 'components/molecules/GalleryItem/GalleryItem';

interface GalleryItemInterface {
  id: string;
  title: string;
  description: string;
  src: string;
}

interface props {
  array: GalleryItemInterface[];
}

const Gallery = ({ array }: props): JSX.Element => {
  return (
    <GalleryWrapper>
      {array.map(({ id, title, description, src }) => (
        <GalleryItem path={`post/${id}`} key={id} title={title} description={description} src={src} />
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
