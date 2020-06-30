import * as React from 'react';

import { RadioButton } from '../components';

export default {
  title: 'Radio Button',
  component: RadioButton,
};

export const basic = (): React.ReactElement => (
  <div className="inline-block">
    <div className="w-full p-2">
      <RadioButton name="basic-radio" size={'lg'}>
        Large radio
      </RadioButton>
    </div>
    <div className="w-full p-2">
      <RadioButton name="basic-radio">Medium radio</RadioButton>
    </div>
    <div className="w-full p-2 rounded-b-full">
      <RadioButton name="basic-radio" size={'sm'}>
        Small radio
      </RadioButton>
    </div>
  </div>
);

export const disabled = (): React.ReactElement => (
  <div className="w-full p-2">
    <RadioButton disabled>Disabled radio</RadioButton>
  </div>
);
