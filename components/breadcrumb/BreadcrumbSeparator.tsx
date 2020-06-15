import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;
}

const BreadcrumbSeparator = ({
  children,
  className,
  style,
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

export default BreadcrumbSeparator;
