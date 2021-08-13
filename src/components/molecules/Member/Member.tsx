import React from 'react';
import PropTypes from 'prop-types';
import { MemberWrapper, Image, PersonImage, Info, Name, Permissions } from './Member.styles';
import { useModal } from 'hooks/useModal';
import { Bold } from 'components/atoms/Bold/Bold';

interface props {
  name: string;
  classNameProp: string;
  description: string;
  permissions: string;
}

const Member = ({ name, classNameProp, description, permissions }: props): JSX.Element => {
  const { openModal } = useModal();
  return (
    <MemberWrapper
      onClick={() =>
        openModal(
          <>
            <p>
              <Bold>Klasa:</Bold> {classNameProp}
            </p>
            <p>
              <Bold>Opis:</Bold> {description}
            </p>
          </>,
          name
        )
      }
    >
      <Image>
        <PersonImage src="https://images.macrumors.com/t/CynyMmV320sxD-tHY9kdnlFNnBc=/400x0/filters:quality(90)/article-new/2019/04/guest-user-250x250.jpg?lossy" />
      </Image>
      <Info>
        <Name>{`${name} - ${classNameProp}`}</Name>
        <Permissions>{permissions}</Permissions>
      </Info>
    </MemberWrapper>
  );
};

Member.propTypes = {
  name: PropTypes.string.isRequired,
  classNameProp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  permissions: PropTypes.string.isRequired
};

export default Member;
