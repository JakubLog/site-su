import React from 'react';
import { Settings, Setting, Link } from './SettingsNav.styles';
import { useAuth } from 'hooks/useAuth';

const SettingsNav = (): JSX.Element => {
  const { signOut } = useAuth();
  return (
    <Settings>
      <Setting exact to="/dashboard/">
        Twój opis
      </Setting>
      <Setting to="/dashboard/forms">Ankiety</Setting>
      <Setting to="/dashboard/posts">Posty</Setting>
      <Link href="https://airtable.com/shrg4LwIw99QUl7da" target="_blank">
        Zmiana hasła
      </Link>
      <Link href="https://airtable.com/shrc979TXdKesLF2B" target="_blank">
        Zmiana e-maila
      </Link>
      <Link href="https://airtable.com/shrHHQ47pMhxgk9ZE" target="_blank">
        Pomoc
      </Link>
      <Link href="#" onClick={signOut}>
        Wyloguj się
      </Link>
    </Settings>
  );
};

export default SettingsNav;
