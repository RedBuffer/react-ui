import * as React from 'react';
import classnames from 'classnames';

interface PropTypes {
  className?: string;
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
        'p-0',
        'my-4',
        'w-full',
        'border-t',
        'min-w-full',
        'font-medium',
        'border-gray-500',
        children && 'divider-with-text',
        'react-ui-divider',
        className,
      )}
      style={style}
      {...restProps}
    >
      {children ? (
        <span className={classnames('px-2', 'inline-block')}>{children}</span>
      ) : null}
    </div>
  );
};

export default Component;
