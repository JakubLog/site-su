import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  height: 100%;
  transition: 0.3s opacity ease-in-out;
`;

export const InfoBar = styled.div``;

export const Title = styled.h4``;

export const Description = styled.p``;

export const GalleryItemWrapper = styled(Link)`
  width: 100%;
  max-width: 400px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.secondary};
  height: 300px;
  position: relative;
  box-shadow: 0 5px 20px -13px ${({ theme }) => theme.color.secondaryDarken};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  img {
    transition: transform 0.5s ease-in-out, opacity 0.2s ease-in-out;
  }
  &::before {
    content: '';
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.color.primary};
    z-index: 10;
  }
  &::after {
    content: attr(data-title);
    font-size: 22px;
    color: ${({ theme }) => theme.color.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 12;
  }
  &:hover {
    &::before {
      opacity: 0.5;
    }
    &::after {
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }
  @media (min-width: 1350px) {
    border-radius: 0;
    &:first-child {
      max-width: 100%;
      height: 100%;
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      img {
        transform: scale(1.15);
      }
      &::before {
        display: none;
      }
      &::after {
        display: none;
      }
      ${InfoBar} {
        position: absolute;
        height: 150px;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.color.primary};
        opacity: 0.7;
        z-index: 10;
        padding: 15px 25px;
        transition: opacity 0.3s ease-in-out;
        * {
          margin: 0;
          display: block;
        }
      }
      ${Title} {
        font-size: 30px;
        margin-bottom: 10px;
      }
      ${Description} {
        letter-spacing: 1.5px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &:hover {
        img {
          transform: unset;
          opacity: 0.85;
        }
        ${InfoBar} {
          opacity: 0.9;
        }
      }
    }
  }
`;
