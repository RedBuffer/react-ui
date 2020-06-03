import * as React from 'react';

type PropTypes = {
  children?: React.ReactNode;
};

const Component = ({ children }: PropTypes): React.ReactElement => {
  return <>{children}</>;
};

export default Component;
