import * as React from 'react';

import { NavBar } from '../components';

export default {
  title: 'NavBar',
  Component: NavBar,
};

export const Header = (): React.ReactElement => (
  <NavBar>
    <NavBar.Item active>Dashboard</NavBar.Item>
    <NavBar.Item className="ml-4">Team</NavBar.Item>
    <NavBar.Item className="ml-4">Projects</NavBar.Item>
    <NavBar.Item className="ml-4">Calendar</NavBar.Item>
  </NavBar>
);
