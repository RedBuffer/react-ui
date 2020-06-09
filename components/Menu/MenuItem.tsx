import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  selected?: boolean;

  children: React.ReactNode;
}

const MenuItem = ({
  style,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <li
      className={classnames(
        'react-ui-menu-item',
        'py-2',
        'px-4',
        'm-0',
        'relative',
        'list-none',
        className,
      )}
      style={style}
      {...restProps}
    >
      {children}
      <style jsx>
        {`
          .react-ui-menu-item:hover {
            background-color: #f1f1f1;
          }
        `}
      </style>
    </li>
  );
};

export default MenuItem;
