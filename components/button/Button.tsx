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

  type?:
    | 'dark'
    | 'info'
    | 'light'
    | 'danger'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary'
    | 'default';

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
    <button
      {...restProps}
      type={htmlType}
      className={classnames(
        className,
        'py-1',
        'px-4',
        'rounded',
        'font-bold',
        `bg-${type}`,
        `text-${type}`,
        'outline-none',
      )}
    >
      {children}
    </button>
  );
};

export default Component;
