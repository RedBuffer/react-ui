import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;
  children: React.ReactNode;
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
      className={classnames('react-ui-breadcrumb-item', className)}
      style={style}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default Component;
