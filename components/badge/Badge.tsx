import * as React from 'react';
import classnames from 'classnames';

type PropTypes = {
  type?:
    | 'dark'
    | 'info'
    | 'light'
    | 'danger'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary'
    | 'default';

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  children?: string;

  className?: string;
};

const Component = ({
  size,
  children,
  className,
  type = 'default',
}: PropTypes): React.ReactElement => {
  return (
    <span
      className={classnames(
        className,
        'px-2',
        'leading-1',
        `bg-${type}`,
        'inline-flex',
        'rounded-full',
        `text-${type}`,
        'font-semibold',
        'cursor-default',
        size && `text-${size}`,
      )}
    >
      {children}
    </span>
  );
};

export default Component;
