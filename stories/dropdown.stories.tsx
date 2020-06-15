import * as React from 'react';

import { Button, Dropdown, Menu } from '../components';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const hover = (): React.ReactElement => (
  <Dropdown
    overlay={
      <Menu>
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
    }
  >
    <Button type={'primary'} className="m-1">
      Dropdown
    </Button>
  </Dropdown>
);

export const click = (): React.ReactElement => (
  <Dropdown
    trigger={'click'}
    overlay={
      <Menu>
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
    }
  >
    <Button type={'primary'} className="m-1">
      Dropdown
    </Button>
  </Dropdown>
);
