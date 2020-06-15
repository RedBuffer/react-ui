import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  children: React.ReactNode;

  overlay: React.ReactElement;

  trigger?: 'hover' | 'click';
}

const Dropdown = ({
  style,
  overlay,
  children,
  trigger = 'hover',
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <div
      className={classnames(
        'react-ui-dropdown',
        'm-4',
        'relative',
        'inline-block',
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
            'react-ui-dropdown-content',
            'w-32',
            'absolute',
            'z-10',
          )}
        >
          {overlay}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
