/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { MembersWrapper, MembersGroup, GroupTitle, GroupBody } from './Members.styles';
import Member from 'components/molecules/Member/Member';
import Loading from 'components/molecules/Loading/Loading';
import { useMembers } from 'hooks/useMembers';
import { gsap, Back } from 'gsap';
import { useRef } from 'react';
import { PageTitle } from 'components/atoms/PageTitle/PageTitle';

export interface member {
  name: string;
  permissions: string;
  className: string;
  description: string;
  group: string;
}

const setCookie = (name: string, value: any, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};
const getCookie = (name: string): any => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const Members: React.FC = () => {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { getGroup } = useMembers();

  useEffect(() => {
    (async () => {
      setLoadingState(true);
      if (getCookie('members_A') !== null) {
        setGroupA(JSON.parse(getCookie('members_A')));
        setGroupB(JSON.parse(getCookie('members_B')));
      } else {
        const groupA = await getGroup('A');
        const groupB = await getGroup('B');
        setGroupA(groupA);
        setGroupB(groupB);
        setCookie('members_A', JSON.stringify(groupA), 30);
        setCookie('members_B', JSON.stringify(groupB), 30);
      }
      setLoadingState(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = useRef();

  useEffect(() => {
    gsap.set(title.current, { visibility: 'visible' });

    if (window.innerWidth >= 1350) {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from(title.current, { duration: 0.6, opacity: 0, y: 50, ease: Back.easeOut.config(2) });
    }
  }, []);

  return (
    <>
      <PageTitle ref={title}>Członkowie naszego zespołu</PageTitle>
      <MembersWrapper>
        <MembersGroup>
          <GroupTitle>Klasy I-III</GroupTitle>
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
          <GroupTitle>Klasy IV-VIII</GroupTitle>
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
