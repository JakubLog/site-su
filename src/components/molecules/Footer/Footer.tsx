import React from 'react';
import { FooterWrapper, Socials, Social } from './Footer.styles';
import { RiFacebookCircleLine as FbIcon } from 'react-icons/ri';
import { FaMousePointer as MouseIcon } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <span id="first">Szkoła Podstawowa Nr. 3 w Środzie Śląskiej</span>
      <Socials>
        <Social href="https://www.facebook.com/srodaslaskasp3su" target="_blank">
          <FbIcon style={{ color: 'blue' }} />
        </Social>
        <Social href="https://sp-srodaslaska.edupage.org/" target="_blank">
          <MouseIcon />
        </Social>
      </Socials>
      <span id="second">2021 &copy; All rights reserved</span>
    </FooterWrapper>
  );
};

export default Footer;
