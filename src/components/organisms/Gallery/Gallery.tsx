import React from 'react';
import { GalleryWrapper } from './Gallery.styles';
import GalleryItem from 'components/molecules/GalleryItem/GalleryItem';

interface GalleryItemInterface {
  className: string;
  id: string;
  title: string;
  description: string;
  src: { url: string };
}

interface props {
  array: GalleryItemInterface[];
}

const Gallery = ({ array }: props): JSX.Element => {
  return (
    <GalleryWrapper>
      {array.map(({ id, title, description, src: { url } }) => (
        <GalleryItem path={`post/${id}`} key={id} title={title} description={description} src={url} />
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
