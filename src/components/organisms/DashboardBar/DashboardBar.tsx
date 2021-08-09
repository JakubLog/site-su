import React from 'react';
import { Bar } from './DashboardBar.styles';
import SettingsNav from 'components/molecules/SettingsNav/SettingsNav';
import Profile from 'components/molecules/Profile/Profile';

interface props {
  name: string;
}

const DashboardBar = ({ name }: props): JSX.Element => {
  return (
    <Bar>
      <Profile name={name} />
      <SettingsNav />
    </Bar>
  );
};

export default DashboardBar;
