import * as React from 'react';
import classnames from 'classnames';

type PropTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Component = ({
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      className={classnames(
        'flex',
        'left-0',
        'absolute',
        'inset-y-0',
        'sm:hidden',
        'items-center',
      )}
    >
      {/* <!-- Mobile menu button--> */}
      <button
        {...restProps}
        className={classnames(
          className,
          'p-2',
          'transition',
          'rounded-md',
          'ease-in-out',
          'inline-flex',
          'duration-150',
          'items-center',
          'text-gray-400',
          'justify-center',
          'focus:text-white',
          'hover:text-white',
          'focus:bg-gray-700',
          'hover:bg-gray-700',
          'focus:outline-none',
        )}
        aria-label="Main menu"
        aria-expanded="false"
      >
        {/* <!-- Icon when menu is closed. -->
<!-- Menu open: "hidden", Menu closed: "block" --> */}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="block h-6 w-6"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* <!-- Icon when menu is open. -->
<!-- Menu open: "block", Menu closed: "hidden" --> */}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={classnames('h-6', 'w-6', 'hidden')}
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Component;
