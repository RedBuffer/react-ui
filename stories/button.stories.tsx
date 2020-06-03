import * as React from 'react';

import { Button } from '../components';

export default {
  title: 'Button',
  component: Button,
};

const renderButton = (type, text = '', props = {}) => (
  <Button
    {...props}
    type={type}
    className="m-1"
    onClick={() => {
      alert('Hello button');
    }}
  >
    {text || type}
  </Button>
);

export const Types = (): React.ReactElement => (
  <>
    {renderButton('default')}
    {renderButton('primary')}
    {renderButton('secondary')}
    {renderButton('success')}
    {renderButton('danger')}
    {renderButton('warning')}
    {renderButton('info')}
    {renderButton('light')}
    {renderButton('dark')}
  </>
);

export const Sizes = (): React.ReactElement => (
  <div style={{ width: '80vw' }}>
    {renderButton('default', 'xs', { size: 'xs' })}
    {renderButton('default', 'sm', { size: 'sm' })}
    {renderButton('default', 'md', { size: 'md' })}
    {renderButton('default', 'lg', { size: 'lg' })}
    {renderButton('default', 'xl', { size: 'xl' })}
    <br />
    {renderButton('secondary', 'block', { block: true })}
  </div>
);

export const Shapes = (): React.ReactElement => (
  <>
    {renderButton('primary', 'default')}
    {renderButton('primary', 'rounded', { shape: 'rounded' })}
    {renderButton('primary', 'circle', { shape: 'circle' })}
  </>
);

export const States = (): React.ReactElement => (
  <>{renderButton('default', 'Disabled', { disabled: true })}</>
);
