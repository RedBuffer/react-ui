import * as React from 'react';
import classnames from 'classnames';

import BreadcrumbSeparator from './BreadcrumbSeparator';

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  separator?: string | typeof BreadcrumbSeparator;

  children: React.ReactNode | React.ReactNode[];
}

const Breadcrumb = ({
  style,
  className,
  children,
  separator = '/',
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
        'react-ui-breadcrumb',
        'p-2',
        'm-0',
        'box-border',
        'font-medium',
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
