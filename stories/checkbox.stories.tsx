import * as React from 'react';

import { Checkbox } from '../components';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const basic = (): React.ReactElement => (
  <div className="inline-block">
    <div className="w-full p-2">
      <Checkbox size={'lg'}>Large checkbox</Checkbox>
    </div>
    <div className="w-full p-2">
      <Checkbox>Medium checkbox</Checkbox>
    </div>
    <div className="w-full p-2">
      <Checkbox size={'sm'}>Small checkbox</Checkbox>
    </div>
  </div>
);

export const disabled = (): React.ReactElement => (
  <div className="w-full p-2">
    <Checkbox disabled>Disabled checkbox</Checkbox>
  </div>
);
