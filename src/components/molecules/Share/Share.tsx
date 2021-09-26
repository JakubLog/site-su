import React from 'react';
import PropTypes from 'prop-types';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from 'react-share';
import { ShareIcons } from './Share.styles';

interface props {
  id: string;
}

const Share: React.FC<props> = ({ id }) => {
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

Share.propTypes = {
  id: PropTypes.string.isRequired
};

export default Share;
