import React, { useEffect, useState } from 'react';
import { Title, MembersWrapper, MembersGroup, GroupTitle, GroupBody } from './Members.styles';
import Member from 'components/molecules/Member/Member';
import Loading from 'components/molecules/Loading/Loading';
import { useMembers } from 'hooks/useMembers';

export interface member {
  name: string;
  permissions: string;
  className: string;
  description: string;
  group: string;
}

const Members = (): JSX.Element => {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { getGroup } = useMembers();

  useEffect(() => {
    (async () => {
      setLoadingState(true);
      setGroupA(await getGroup('A'));
      setGroupB(await getGroup('B'));
      setLoadingState(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title>Członkowie naszego zespołu</Title>
      <MembersWrapper>
        <MembersGroup>
          <GroupTitle>Klasy I-II</GroupTitle>
          <GroupBody>
            {isLoading ? (
              <Loading />
            ) : (
              groupA.map(({ name, permissions, className, description }: member) => (
                <Member key={name} name={name} description={description} permissions={permissions} classNameProp={className} />
              ))
            )}
          </GroupBody>
        </MembersGroup>
        <MembersGroup>
          <GroupTitle>Klasy III-VIII</GroupTitle>
          <GroupBody>
            {isLoading ? (
              <Loading />
            ) : (
              groupB.map(({ name, permissions, className, description }: member) => (
                <Member key={name} name={name} description={description} permissions={permissions} classNameProp={className} />
              ))
            )}
          </GroupBody>
        </MembersGroup>
      </MembersWrapper>
    </>
  );
};

export default Members;
