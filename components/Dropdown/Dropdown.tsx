import * as React from 'react';
import classnames from 'classnames';

type Align = {
  points?: [string, string];
  offset?: [number, number];
  targetOffset?: [number, number];
  overflow?: {
    adjustX?: boolean;
    adjustY?: boolean;
  };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
};

interface Classes {
  dropdown?: string;

  button?: string;

  content?: string;
}

export interface PropTypes {
  style?: React.CSSProperties;

  className?: string;

  classes?: Classes;

  overlay: React.ReactElement;

  disabled?: boolean;

  align?: Align;
}

const Dropdown = ({
  style,
  overlay,
  disabled,
  className,
  classes = {},
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
        classes.dropdown,
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
          classes.button,
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
          classes.content,
        )}
      >
        {overlay}
      </div>
    </div>
  );
};

export default Dropdown;
