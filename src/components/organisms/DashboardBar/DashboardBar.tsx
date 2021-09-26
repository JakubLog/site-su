import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from './DashboardBar.styles';
import SettingsNav from 'components/molecules/SettingsNav/SettingsNav';
import Profile from 'components/molecules/Profile/Profile';

interface props {
  name: string;
}

const DashboardBar: React.FC<props> = ({ name }) => {
  return (
    <Bar>
      <Profile name={name} />
      <SettingsNav />
    </Bar>
  );
};

DashboardBar.propTypes = {
  name: PropTypes.string.isRequired
};

export default DashboardBar;
