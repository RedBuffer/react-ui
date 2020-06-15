import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;
  selected?: boolean;
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
    <li
      className={classnames(
        'm-0',
        'px-4',
        'py-2',
        'relative',
        'list-none',
        'btn-light',
        'react-ui-menu-item',
        className,
      )}
      style={style}
      {...restProps}
    >
      {children}
    </li>
  );
};

export default Component;
