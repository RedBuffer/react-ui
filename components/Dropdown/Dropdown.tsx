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
          'bg-blue-400',
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
      <style jsx>
        {`
          .react-ui-dropdown:hover .react-ui-dropdown-content {
            display: block;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
