import * as React from 'react';
import classnames from 'classnames';

import Item from './Item';
import SubMenu from './SubMenu';
import ImageButton from './ImageButton';
import ToggleMenuButton from './ToggleMenuButton';

type MenuItem = {
  key: string;
  text?: string;
  selected?: boolean;
};

type SubMenuItem = {
  key: string;
  text?: string;
};

interface PropTypes
  extends Omit<
    Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      'children' | 'as'
    >,
    'onClick'
  > {
  menuItems?: MenuItem[];
  brand?: React.ReactNode;
  subMenuItems?: SubMenuItem[];
  onClick?: (key: string) => void;
}

const Component = ({
  brand,
  className,
  menuItems = [],
  subMenuItems = [],
  // eslint-disable-next-line
  onClick = () => {},
  ...restProps
}: PropTypes): React.ReactElement => {
  const [menu, setMenu] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);

  return (
    <nav {...restProps} className={classnames('bg-gray-800', className)}>
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
            <div className={classnames('flex-shrink-0')}>{brand}</div>

            <div className={classnames('hidden', 'sm:block', 'sm:ml-6')}>
              <div className={classnames('flex')}>
                {menuItems.map((menuItem, index) => (
                  <Item
                    active={menuItem.selected}
                    className={classnames(
                      index && 'ml-4',
                      'text-sm',
                      'leading-5',
                      'cursor-pointer',
                      menuItem.selected && 'bg-gray-900',
                      !menuItem.selected && 'hover:text-white',
                      !menuItem.selected && 'hover:bg-gray-700',
                      menuItem.selected ? 'text-white' : 'text-gray-300',
                    )}
                    key={`nav_menu_item_${menuItem.key}`}
                    onClick={() => onClick(menuItem.key)}
                  >
                    {menuItem.text}
                  </Item>
                ))}
              </div>
            </div>
          </div>

          <div
            className={classnames(
              'flex',
              'pr-2',
              'right-0',
              'sm:ml-6',
              'sm:pr-0',
              'absolute',
              'inset-y-0',
              'sm:static',
              'items-center',
              'sm:inset-auto',
            )}
          >
            {/* <!-- Profile dropdown --> */}
            <div className={classnames('ml-3', 'relative')}>
              <ImageButton
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                onClick={() => setSubMenu(!subMenu)}
              />
              {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              <SubMenu
                hidden={!subMenu}
                onFocus={() => {
                  console.log('focus');
                }}
                onBlur={() => {
                  console.log('blur');
                }}
              >
                {subMenuItems.map((subMenuItem) => (
                  <a
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
                    onClick={(e) => {
                      e.preventDefault();
                      onClick(subMenuItem.key);
                    }}
                    key={`nav_submenu_item_${subMenuItem.key}`}
                  >
                    {subMenuItem.text}
                  </a>
                ))}
              </SubMenu>
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
          {menuItems.map((menuItem, index) => (
            <Item
              className={classnames(
                'text-base',
                'text-gray-300',
                index && 'mt-1',
                'hover:text-white',
                'hover:bg-gray-700',
              )}
              active={menuItem.selected}
              onClick={() => onClick(menuItem.key)}
              key={`nav_menu_sm_item_${menuItem.key}`}
            >
              {menuItem.text}
            </Item>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Component;
