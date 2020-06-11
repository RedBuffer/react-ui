import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;

  style?: React.CSSProperties;

  children: React.ReactNode;
}

const BreadcrumbItem = ({
  className,
  children,
  style,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <span
      className={classnames('react-ui--breadcrumb-item', className)}
      style={style}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default BreadcrumbItem;
