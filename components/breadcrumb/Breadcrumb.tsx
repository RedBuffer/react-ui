import * as React from 'react';
import classnames from 'classnames';

import BreadcrumbSeparator from './BreadcrumbSeparator';

export interface PropTypes {
  children?: React.ReactNode | React.ReactNode[];

  className?: string;

  separator?: string;

  style?: React.CSSProperties;
}

const Breadcrumb = ({
  children,
  className,
  separator = '/',
  style,
  ...restProps
}: PropTypes): React.ReactElement => {
  const crumbs = Array.isArray(children) ? (
    children.map((element, index) => {
      const lastItem = index === children.length - 1;
      return (
        <span
          className={classnames(lastItem ? 'text-primary' : 'text-fade')}
          key={index}
        >
          {element}
          {!lastItem ? (
            <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
          ) : (
            <></>
          )}
        </span>
      );
    })
  ) : (
    <span className={classnames('text-primary')}>{children}</span>
  );

  return (
    <div
      className={classnames(
        'm-0',
        'p-2',
        'box-border',
        'font-medium',
        'react-ui-breadcrumb',
        className,
      )}
      style={style}
      {...restProps}
    >
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
