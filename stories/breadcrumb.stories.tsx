import * as React from 'react';

import { Breadcrumb } from '../components';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const single = (): React.ReactElement => (
  <Breadcrumb className="">
    <Breadcrumb.item>
      <a href="#">crumb 1</a>
    </Breadcrumb.item>
  </Breadcrumb>
);

export const multiple = (): React.ReactElement => (
  <Breadcrumb className="">
    <Breadcrumb.item>
      <a href="#">crumb 1</a>
    </Breadcrumb.item>
    <Breadcrumb.item>
      <a href="#">crumb 2</a>
    </Breadcrumb.item>
    <Breadcrumb.item>
      <a href="#">crumb 3</a>
    </Breadcrumb.item>
  </Breadcrumb>
);

export const customSeparator = (): React.ReactElement => (
  <Breadcrumb separator="//" className="">
    <Breadcrumb.item>
      <a href="#">crumb 1</a>
    </Breadcrumb.item>
    <Breadcrumb.item>
      <a href="#">crumb 2</a>
    </Breadcrumb.item>
    <Breadcrumb.item>
      <a href="#">crumb 3</a>
    </Breadcrumb.item>
  </Breadcrumb>
);
