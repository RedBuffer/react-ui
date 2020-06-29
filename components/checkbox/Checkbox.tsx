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
  children: React.ReactNode | string;

  disabled?: boolean;

  size?: 'sm' | 'md' | 'lg';
}

const Component = ({
  children,
  className,
  disabled = false,
  size = 'md',
  ...restProps
}: PropTypes): React.ReactElement => {
  let padding: number;
  let textPaddingLeft: number;
  let width: number;

  if (size === 'sm') {
    padding = 1;
    width = 5;
    textPaddingLeft = 6;
  } else if (size === 'lg') {
    padding = 3;
    width = 8;
    textPaddingLeft = 10;
  } else {
    padding = 2;
    width = 6;
    textPaddingLeft = 8;
  }

  return (
    <label
      className={classnames(
        'm-2',
        'block',
        'relative',
        'select-none',
        `text-${size}`,
        'cursor-pointer',
        `pl-${textPaddingLeft}`,
        'react-ui-checkbox-label',
        className,
      )}
    >
      {children}
      <input
        className={classnames(
          'h-0',
          'w-0',
          'absolute',
          'opacity-0',
          'react-ui-checkbox',
        )}
        type="checkbox"
        disabled={disabled}
        {...restProps}
      />
      <span
        className={classnames(
          'top-0',
          'left-0',
          'absolute',
          'bg-gray-400',
          'rounded',
          `h-${width}`,
          `w-${width}`,
          `p-${padding}`,
          `checkmark-${size}`,
          'react-ui-checkbox-checkmark',
        )}
      />
    </label>
  );
};

export default Component;
