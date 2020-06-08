import * as React from 'react';

import { Input } from '../components';

export default {
  title: 'Input',
  Component: Input,
};

export const Types = (): React.ReactElement => (
  <div className="p-2">
    <Input className="my-1" placeholder="Text Box" />
    <Input type="password" className="my-1" placeholder="Password Box" />
    <Input.TextArea className="my-1" placeholder="Text Area" />
  </div>
);

export const Sizes = (): React.ReactElement => (
  <div className="p-2">
    <Input size="lg" className="my-1" placeholder="large size" />
    <Input size="md" className="my-1" placeholder="default size" />
    <Input size="sm" className="my-1" placeholder="small size" />
  </div>
);
