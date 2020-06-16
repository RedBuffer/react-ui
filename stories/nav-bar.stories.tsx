import * as React from 'react';
import classnames from 'classnames';

import { NavBar } from '../components';

export default {
  title: 'NavBar',
  Component: NavBar,
};

export const Header = (): React.ReactElement => {
  const [selected, setSelected] = React.useState('main');
  console.log(selected);

  return (
    <NavBar
      onClick={setSelected}
      menuItems={[
        { key: 'main', text: 'Dashboard', selected: selected === 'main' },
        { key: 'teams', text: 'Team', selected: selected === 'teams' },
        {
          key: 'projects',
          text: 'Projects',
          selected: selected === 'projects',
        },
        {
          key: 'calendar',
          text: 'Calendar',
          selected: selected === 'calendar',
        },
      ]}
      subMenuItems={[
        { key: 'profile', text: 'Your Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'signout', text: 'Sign Out' },
      ]}
      brand={
        <>
          <img
            className={classnames('h-8', 'block', 'w-auto', 'lg:hidden')}
            src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
            alt="Workflow logo"
          />
          <img
            className={classnames('h-8', 'w-auto', 'hidden', 'lg:block')}
            src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
            alt="Workflow logo"
          />
        </>
      }
    />
  );
};
