import React from 'react';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share';
import { ShareIcons } from './Share.styles';

interface props {
  id: string;
}

const Share = ({ id }: props): JSX.Element => {
  const webLink = `https://google.pl/${id}`;
  return (
    <ShareIcons>
      <FacebookShareButton url={webLink}>
        <FacebookIcon size="35" round={true} />
      </FacebookShareButton>
      <LinkedinShareButton url={webLink}>
        <LinkedinIcon size="35" round={true} />
      </LinkedinShareButton>
      <EmailShareButton url={webLink}>
        <EmailIcon size="35" round={true} />
      </EmailShareButton>
    </ShareIcons>
  );
};

export default Share;
