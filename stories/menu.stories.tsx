import * as React from 'react';

import { Menu } from '../components';

export default {
  title: 'Menu',
  component: Menu,
};

export const Basic = (): React.ReactElement => (
  <Menu className="w-20">
    <Menu.Item>
      <a href="#">Item 1</a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">Item 2</a>
    </Menu.Item>
    <Menu.Item>
      <a href="#">Item 3</a>
    </Menu.Item>
  </Menu>
);
