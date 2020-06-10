import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

const Component = ({
  children,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      {...restProps}
      className={classnames(
        'mt-2',
        'w-48',
        'right-0',
        'absolute',
        'shadow-lg',
        'rounded-md',
        'origin-top-right',
      )}
    >
      <div
        role="menu"
        aria-labelledby="user-menu"
        aria-orientation="vertical"
        className={classnames('py-1', 'rounded-md', 'bg-white', 'shadow-xs')}
      >
        <a
          href="#"
          className={classnames(
            'block',
            'px-4',
            'py-2',
            'text-sm',
            'leading-5',
            'ease-in-out',
            'text-gray-700',
            'focus:bg-gray-100',
            'hover:bg-gray-100',
            'focus:outline-none',
            'transition duration-150',
          )}
        >
          Your Profile
        </a>
        <a
          href="#"
          className={classnames(
            'block',
            'px-4',
            'py-2',
            'text-sm',
            'leading-5',
            'ease-in-out',
            'text-gray-700',
            'focus:bg-gray-100',
            'hover:bg-gray-100',
            'focus:outline-none',
            'transition duration-150',
          )}
        >
          Settings
        </a>
        <a
          href="#"
          className={classnames(
            'px-4',
            'py-2',
            'block',
            'text-sm',
            'rounded-md',
            'leading-5',
            'ease-in-out',
            'text-gray-700',
            'focus:bg-gray-100',
            'hover:bg-gray-100',
            'focus:outline-none',
            'transition duration-150',
          )}
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default Component;
