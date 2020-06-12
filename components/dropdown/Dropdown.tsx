import * as React from 'react';
import classnames from 'classnames';

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  overlay: React.ReactElement;

  disabled?: boolean;
}

const Dropdown = ({
  style,
  overlay,
  disabled,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
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
      {...restProps}
    >
      <button
        className={classnames(
          'react-ui-dropdown-btn',
          'p-4',
          'text-white',
          'btn-primary',
          'border-0',
          'cursor-pointer',
        )}
        disabled={disabled}
      >
        Dropdown
      </button>
      <div
        className={classnames(
          'react-ui-dropdown-content',
          'hidden',
          'w-32',
          'absolute',
          'z-10',
        )}
      >
        {overlay}
      </div>
    </div>
  );
};

export default Dropdown;
