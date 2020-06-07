import * as React from 'react';

import Menu from '../src/components/Menu';

export default {
  title: 'Menu',
  component: Menu,
};

export const Basic = (): React.ReactElement => (
  <Menu className="w-20">
    <Menu.MenuItem>
      <a href="#">Item 1</a>
    </Menu.MenuItem>
    <Menu.MenuItem>
      <a href="#">Item 2</a>
    </Menu.MenuItem>
    <Menu.MenuItem>
      <a href="#">Item 3</a>
    </Menu.MenuItem>
  </Menu>
);
