import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  selected?: boolean;

  children: React.ReactNode;
}

const Menu = ({
  style,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      className={classnames(
        'box-border',
        'bg-white',
        'shadow',
        'whitespace-no-wrap',
        'py-2',
        'px-0',
        'overflow-y-hidden',
        'overflow-x-auto',
        className,
      )}
      style={style}
      {...restProps}
    >
      <ul className={classnames('list-none', 'p-0', 'm-0')}>{children}</ul>
    </div>
  );
};

export default Menu;
