import * as React from 'react';
import classnames from 'classnames';

import SubMenu from './SubMenu';
import ImageButton from './ImageButton';
import ToggleMenuButton from './ToggleMenuButton';

type MenuItem = {
  title: string;
};

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  items?: MenuItem[];

  brand?: React.ReactNode;

  selectedKeys?: string[];

  children?: React.ReactNode;
}

const Component = ({
  brand,
  children,
  className,
  // selectedKeys = [],
  ...restProps
}: PropTypes): React.ReactElement => {
  const [menu, setMenu] = React.useState(false);

  return (
    <nav {...restProps} className={classnames(className, 'bg-gray-800')}>
      <div
        className={classnames(
          'px-2',
          'sm:px-6',
          'lg:px-8',
          'mx-auto',
          'max-w-7xl',
        )}
      >
        <div
          className={classnames(
            'flex',
            'h-16',
            'relative',
            'items-center',
            'justify-between',
          )}
        >
          <ToggleMenuButton />

          <div
            className={classnames(
              'flex',
              'flex-1',
              'items-center',
              'justify-center',
              'sm:items-stretch',
              'sm:justify-start',
            )}
          >
            <div className={classnames('flex-shrink-0')}>
              {brand}
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow logo"
              /> */}
            </div>

            <div className={classnames('hidden', 'sm:block', 'sm:ml-6')}>
              <div className={classnames('flex')}>{children}</div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className={classnames('ml-3', 'relative')}>
              <ImageButton src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              <SubMenu />
            </div>
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
      <div className={classnames('hidden', 'sm:hidden')}>
        <div className={classnames('pb-3', 'pt-2', 'px-2')}>
          {/* <MenuItem>Dashboard</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <a
            href="#"
            className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            Team
          </a> */}
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Component;
