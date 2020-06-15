import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  children: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;
}

const BreadcrumbItem = ({
  children,
  className,
  style,
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

export default BreadcrumbItem;
