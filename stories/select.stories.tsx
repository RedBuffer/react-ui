import * as React from 'react';

import { Select } from '../components';

const { Option } = Select;

export default {
  title: 'Select',
  Component: Select,
};

export const Sizes = (): React.ReactElement => (
  <div className="p-2 w-48">
    <Select size="lg" className="my-1">
      <Option>Option 1</Option>
      <Option>Option 2</Option>
      <Option>Option 3</Option>
      <Option>Option 4</Option>
    </Select>
    <Select size="md" className="my-1">
      <Option>Option 1</Option>
      <Option>Option 2</Option>
      <Option>Option 3</Option>
      <Option>Option 4</Option>
    </Select>
    <Select size="sm" className="my-1 ">
      <Option>Option 1</Option>
      <Option>Option 2</Option>
      <Option>Option 3</Option>
      <Option>Option 4</Option>
    </Select>
  </div>
);
