import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  active?: boolean;
  children?: string;
}

const Component = ({
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <a
      {...restProps}
      className={classnames(
        'px-3',
        'py-2',
        'block',
        'rounded-md',
        'transition',
        'ease-in-out',
        'font-medium',
        'duration-150',
        'focus:text-white',
        'focus:bg-gray-700',
        'focus:outline-none',
        className,
      )}
    >
      {children}
    </a>
  );
};

export default Component;
