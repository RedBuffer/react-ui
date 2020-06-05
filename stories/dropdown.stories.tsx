import * as React from 'react';

import Dropdown from '../src/components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DropdownButton = (): React.ReactElement => (
  <Dropdown item={<></>} />
);
