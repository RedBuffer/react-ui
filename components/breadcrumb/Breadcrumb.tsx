import * as React from 'react';
import classnames from 'classnames';

import Separator from './Separator';

export interface PropTypes {
  className?: string;
  separator?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

const Component = ({
  style,
  children,
  className,
  separator = '/',
  ...restProps
}: PropTypes): React.ReactElement => {
  const crumbs = Array.isArray(children) ? (
    children.map((element, index) => {
      const lastItem = index === children.length - 1;
      return (
        <span
          key={index}
          className={classnames(lastItem ? 'text-primary' : 'text-fade')}
        >
          {element}
          {lastItem ? null : <Separator>{separator}</Separator>}
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

export default Component;
