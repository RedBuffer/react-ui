import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;
  selected?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Component = ({
  style,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      className={classnames(
        'px-0',
        'py-2',
        'shadow',
        'bg-white',
        'box-border',
        'overflow-x-auto',
        'overflow-y-hidden',
        'whitespace-no-wrap',
        className,
      )}
      style={style}
      {...restProps}
    >
      <ul className={classnames('list-none', 'p-0', 'm-0')}>{children}</ul>
    </div>
  );
};

export default Component;
