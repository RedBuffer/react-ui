import * as React from 'react';

import { Button } from '../components';

export default {
  title: 'Button',
  component: Button,
};

export const LightButton = (): React.ReactElement => (
  <Button
    type="light"
    onClick={() => {
      alert('Hello button');
    }}
  >
    Hello Button
  </Button>
);

export const DarkButton = (): React.ReactElement => (
  <Button
    type="dark"
    onClick={() => {
      alert('Hello button');
    }}
  >
    Hello Button
  </Button>
);

export const BlockButtonLight = (): React.ReactElement => (
  <Button
    block
    type="light"
    onClick={() => {
      alert('Hello button');
    }}
  >
    Hello Button
  </Button>
);

export const BlockButtonDark = (): React.ReactElement => (
  <Button
    block
    type="dark"
    onClick={() => {
      alert('Hello button');
    }}
  >
    Hello Button
  </Button>
);
