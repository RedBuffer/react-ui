import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type'
  > {
  block?: boolean;

  loading?: boolean;

  children: string;

  type?: 'dark' | 'light';

  htmlType?: 'submit' | 'button' | 'reset';
}

const Component = ({
  block,
  style,
  loading,
  disabled,
  children,
  className,
  type = 'dark',
  htmlType = 'button',
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <>
      <button
        type={htmlType}
        className={classnames(className, `btn-${type}`, block && 'btn-block')}
        disabled={loading || disabled}
        {...restProps}
      >
        {children}
      </button>

      <style jsx>
        {`
          button {
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            padding: 5px 12px;
            border-radius: 3px;
            font-stretch: condensed;
            text-transform: uppercase;
          }

          button::-moz-focus-inner {
            border: 0;
          }

          .btn-block {
            width: 100%;
          }

          .btn-dark {
            border: 0px;
            color: white;
            background: #333;
          }

          .btn-light {
            border: 2px solid #d2d6db;
            color: #61435b;
            background: white;
          }

          .btn-light:hover {
            background: #f5f6f7;
          }
        `}
      </style>
    </>
  );
};

export default Component;
