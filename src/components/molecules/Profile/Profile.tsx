import React from 'react';
import PropTypes from 'prop-types';
import { ProfileWrapper, Image, Name } from './Profile.styles';

interface props {
  name: string;
}

const Profile = ({ name, ...rest }: props): JSX.Element => {
  return (
    <ProfileWrapper {...rest}>
      <Image src="https://images.macrumors.com/t/CynyMmV320sxD-tHY9kdnlFNnBc=/400x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy" />
      <Name>{name}</Name>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired
};

export default Profile;
