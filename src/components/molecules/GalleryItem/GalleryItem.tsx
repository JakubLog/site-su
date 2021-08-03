import React from 'react';
import { GalleryItemWrapper, Background, Title, Description, InfoBar } from './GalleryItem.styles';

interface props {
  title: string;
  description: string;
  src: string;
  path: string;
}

const GalleryItem = ({ title, description, src, path }: props): JSX.Element => {
  return (
    <GalleryItemWrapper to={path} data-title={title}>
      <Background src={src} alt={title} />
      <InfoBar>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoBar>
    </GalleryItemWrapper>
  );
};

export default GalleryItem;
