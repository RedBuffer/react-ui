import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children?: string;

  active?: boolean;
}

const Component = ({
  children,
  active,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <a
      {...restProps}
      className={classnames(
        className,
        'px-3',
        'py-2',
        'block',
        'text-sm',
        'leading-5',
        'rounded-md',
        'transition',
        'ease-in-out',
        'font-medium',
        'duration-150',
        'cursor-pointer',
        'focus:text-white',
        'focus:bg-gray-700',
        'focus:outline-none',
        active && 'bg-gray-900',
        !active && 'hover:text-white',
        !active && 'hover:bg-gray-700',
        active ? 'text-white' : 'text-gray-300',
      )}
    >
      {children}
    </a>
  );
};

export default Component;
