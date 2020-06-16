import * as React from 'react';

import { Breadcrumb } from '../components';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const single = (): React.ReactElement => (
  <Breadcrumb className="">
    <Breadcrumb.Item>
      <a href="#">crumb 1</a>
    </Breadcrumb.Item>
  </Breadcrumb>
);

export const multiple = (): React.ReactElement => (
  <Breadcrumb className="">
    <Breadcrumb.Item>
      <a href="#">crumb 1</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#">crumb 2</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#">crumb 3</a>
    </Breadcrumb.Item>
  </Breadcrumb>
);

export const customSeparator = (): React.ReactElement => (
  <Breadcrumb separator="//" className="">
    <Breadcrumb.Item>
      <a href="#">crumb 1</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#">crumb 2</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#">crumb 3</a>
    </Breadcrumb.Item>
  </Breadcrumb>
);
