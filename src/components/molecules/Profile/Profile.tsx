import React from 'react';
import { ProfileWrapper, Image, Name } from './Profile.styles';

interface props {
  name: string;
}

const Profile = ({ name }: props): JSX.Element => {
  return (
    <ProfileWrapper>
      <Image src="https://images.macrumors.com/t/CynyMmV320sxD-tHY9kdnlFNnBc=/400x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy" />
      <Name>{name}</Name>
    </ProfileWrapper>
  );
};

export default Profile;
