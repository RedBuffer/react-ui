import * as React from 'react';
import classnames from 'classnames';

type PropTypes = {
  children: React.ReactNode;
};

const Component = ({ children }: PropTypes): React.ReactElement => {
  return <>{children}</>;
};

export default Component;
