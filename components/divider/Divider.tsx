import * as React from 'react';
import classnames from 'classnames';

interface PropTypes {
  className?: string;

  style?: React.CSSProperties;

  children?: React.ReactNode;
}

const Divider = ({
  className,
  style,
  children,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      className={classnames(
        'react-ui-divider',
        'border-gray-500',
        'border-t',
        'my-4',
        'p-0',
        'font-medium',
        'min-w-full',
        'w-full',
        children ? 'divider-with-text' : '',
        className,
      )}
      style={style}
      {...restProps}
    >
      {children ? (
        <span className={classnames('inline-block', 'px-2')}>{children}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Divider;
