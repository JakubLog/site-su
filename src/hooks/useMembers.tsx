import React, { createContext, useContext } from 'react';
import { useError } from './useError';
import { db } from '../firebase';
import { member } from 'views/Members/Members';

interface props {
  children: React.ReactNode;
}

type ContextProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getGroup: (groupName: string) => Promise<any>;
};

const MembersContext = createContext<Partial<ContextProps>>({});
const MembersProvider = ({ children }: props): JSX.Element => {
  const getGroup = async (groupName: string) => {
    const temp: member[] = [];
    const docs = await db.collection('members').where('Group', '==', groupName).get();
    docs.forEach((doc) =>
      temp.push({ name: doc.get('Name'), permissions: doc.get('Permissions'), className: doc.get('Class'), group: doc.get('Group') })
    );
    return temp;
  };

  const value = {
    getGroup
  };
  return <MembersContext.Provider value={value}>{children}</MembersContext.Provider>;
};

export const useMembers = (): Partial<ContextProps> => {
  const { dispatchError } = useError();

  const members = useContext(MembersContext);
  if (!members) return dispatchError('Members are not in Context! Please contact with support.');
  return members;
};

export default MembersProvider;
