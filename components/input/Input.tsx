import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'size'
  > {
  type?: 'text' | 'password';

  size?: 'sm' | 'md' | 'lg';
}

const Component = ({
  className,
  size = 'md',
  type = 'text',
  ...restProps
}: PropTypes): React.ReactElement => {
  let padding: number;

  if (size === 'sm') {
    padding = 1;
  } else {
    padding = 2;
  }

  return (
    <input
      {...restProps}
      type={type}
      className={classnames(
        className,
        'px-2',
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
        'appearance-none',
        'focus:outline-none',
        'focus:shadow-outline',
        'hover:border-blue-500',
      )}
    />
  );
};

export default Component;
