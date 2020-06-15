import * as React from 'react';
import classnames from 'classnames';

interface PropTypes {
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;
}

const Component = ({
  children,
  className,
  style,
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
        children ? 'divider-with-text' : '',
        'react-ui-divider',
        className,
      )}
      style={style}
      {...restProps}
    >
      {children ? (
        <span className={classnames('px-2', 'inline-block')}>{children}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Component;
