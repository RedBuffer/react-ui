import * as React from 'react';
import classnames from 'classnames';

import { NavBar } from '../components';

export default {
  title: 'NavBar',
  Component: NavBar,
};

export const Header = (): React.ReactElement => (
  <NavBar
    menuItems={[
      { key: 'main', text: 'Dashboard', selected: true },
      { key: 'teams', text: 'Team' },
      { key: 'projects', text: 'Projects' },
      { key: 'calendar', text: 'Calendar' },
    ]}
    subMenuItems={[
      { key: 'main', text: 'Your Profile' },
      { key: 'teams', text: 'Settings' },
      { key: 'projects', text: 'Sign Out' },
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
