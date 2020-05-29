import * as React from 'react';

type PropTypes = {
  children: string;
};

const Component = ({ children }: PropTypes): React.ReactElement => {
  return <span>{children}</span>;
};

export default Component;
