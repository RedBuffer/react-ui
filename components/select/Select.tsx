import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends Omit<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'size'
  > {
  children?: React.ReactNode;

  size?: 'sm' | 'md' | 'lg';
}

const Component = ({
  children,
  className,
  size = 'md',
  ...restProps
}: PropTypes): React.ReactElement => {
  let padding: number;

  if (size === 'sm') {
    padding = 1;
  } else if (size === 'lg') {
    padding = 3;
  } else {
    padding = 2;
  }

  return (
    <select
      {...restProps}
      className={classnames(
        'px-0',
        'border',
        'w-full',
        'rounded',
        'shadow-sm',
        'transition',
        'ease-in-out',
        'duration-150',
        'text-default',
        `text-${size}`,
        `py-${padding}`,
        'leading-tight',
        'focus:outline-none',
        'focus:shadow-outline',
        'hover:border-blue-500',
        className,
      )}
    >
      {children}
    </select>
  );
};

export default Component;
