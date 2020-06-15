import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  overlay: React.ReactElement;
  trigger?: 'hover' | 'click';
}

const Component = ({
  style,
  overlay,
  children,
  className,
  trigger = 'hover',
  ...restProps
}: PropTypes): React.ReactElement => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <div
      className={classnames(
        'm-4',
        'relative',
        'inline-block',
        'react-ui-dropdown',
        className,
      )}
      style={style}
      onMouseEnter={() => (trigger === 'hover' ? setHidden(false) : {})}
      onMouseLeave={() => (trigger === 'hover' ? setHidden(true) : {})}
      onClick={() => (trigger === 'click' ? setHidden(!hidden) : {})}
      {...restProps}
    >
      {children}
      {!hidden ? (
        <div
          className={classnames(
            'w-32',
            'z-10',
            'absolute',
            'react-ui-dropdown-content',
          )}
        >
          {overlay}
        </div>
      ) : null}
    </div>
  );
};

export default Component;
