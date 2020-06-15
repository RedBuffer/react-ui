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
        {children}
      </div>
    </div>
  );
};

export default Component;
