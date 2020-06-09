import * as React from 'react';

import { Dropdown, Menu } from '../components';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DropdownButton = (): React.ReactElement => (
  <Dropdown
    overlay={
      <Menu>
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
    }
  />
);
