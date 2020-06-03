import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Component = ({
  children,
  disabled,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <button
      {...restProps}
      type="button"
      disabled={disabled}
      className={classnames(
        className,
        'relative',
        'inline-flex',
        'items-center',
        'py-2',
        'border',
        'text-sm',
        'font-medium',
        'focus:z-10',
        'focus:outline-none',
        'transition',
        'ease-in-out',
        'duration-150',
        disabled && 'cursor-auto',
        !disabled && 'hover:text-gray-400',
        disabled ? 'bg-gray-100' : 'bg-white',
      )}
    >
      {children}
    </button>
  );
};

export default Component;
