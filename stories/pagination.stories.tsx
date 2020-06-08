import * as React from 'react';

import { Pagination } from '../components';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const Regular = (): React.ReactElement => {
  const [current, setCurrent] = React.useState(5);

  return <Pagination total={10} current={current} onChange={setCurrent} />;
};

export const Disabled = (): React.ReactElement => (
  <Pagination disabled total={10} current={5} onChange={alert} />
);
