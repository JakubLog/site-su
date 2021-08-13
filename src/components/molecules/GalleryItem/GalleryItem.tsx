import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItemWrapper, Background, Title, Description, InfoBar } from './GalleryItem.styles';

interface props {
  title: string;
  description: string;
  src: string;
  path: string;
}

const GalleryItem = ({ title, description, src, path }: props): JSX.Element => {
  return (
    <GalleryItemWrapper aria-label="post" to={path} data-title={title}>
      <Background src={src} alt={title} />
      <InfoBar>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </InfoBar>
    </GalleryItemWrapper>
  );
};

GalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default GalleryItem;
