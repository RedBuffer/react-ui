import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Component = ({
  style,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <span
      className={classnames('mx-2', 'react-ui-breadcrumb-separator', className)}
      style={style}
      {...restProps}
    >
      {children || '/'}
    </span>
  );
};

export default Component;
