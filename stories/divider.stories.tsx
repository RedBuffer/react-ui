import * as React from 'react';

import { Badge, Divider } from '../components';

export default {
  title: 'Divider',
  Component: Divider,
};

export const Basic = (): React.ReactElement => (
  <div className="w-40 p-2 border-2 ml-10">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
  </div>
);

export const WithText = (): React.ReactElement => (
  <div className="w-40 p-2 border-2 ml-10">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
    <Divider>text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
  </div>
);

export const WithBadge = (): React.ReactElement => (
  <div className="w-40 p-2 border-2 ml-10">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
    <Divider>
      <Badge type="primary" className="m-1">
        badge
      </Badge>
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo
    </p>
  </div>
);
