import * as React from 'react';

import { Badge } from '../components';

export default {
  title: 'Badge',
  component: Badge,
};

export const Types = (): React.ReactElement => (
  <>
    <Badge>default</Badge>
    <Badge type="primary" className="m-1">
      primary
    </Badge>
    <Badge type="secondary" className="m-1">
      secondary
    </Badge>
    <Badge type="success" className="m-1">
      success
    </Badge>
    <Badge type="danger" className="m-1">
      danger
    </Badge>
    <Badge type="warning" className="m-1">
      warning
    </Badge>
    <Badge type="info" className="m-1">
      info
    </Badge>
    <Badge type="light" className="m-1">
      light
    </Badge>
    <Badge type="dark" className="m-1">
      dark
    </Badge>
  </>
);

export const Sizes = (): React.ReactElement => (
  <>
    <Badge size="xs" className="m-1">
      xs
    </Badge>
    <Badge size="sm" className="m-1">
      sm
    </Badge>
    <Badge size="md" className="m-1">
      md
    </Badge>
    <Badge size="lg" className="m-1">
      lg
    </Badge>
    <Badge size="xl" className="m-1">
      xl
    </Badge>
  </>
);
