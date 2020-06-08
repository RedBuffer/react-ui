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

  className?: string;

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

  shape?: 'circle' | 'round' | 'default';

  htmlType?: 'submit' | 'button' | 'reset';
}

const Component = ({
  size,
  block,
  shape,
  loading,
  disabled,
  children,
  className,
  type = 'default',
  htmlType = 'button',
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <button
      {...restProps}
      type={htmlType}
      disabled={disabled}
      className={classnames(
        className,
        'py-1',
        'px-4',
        'shadow',
        'font-bold',
        `btn-${type}`,
        block && 'w-full',
        size && `text-${size}`,
        disabled && 'opacity-50',
        disabled && 'cursor-not-allowed',
        shape && (shape === 'circle' ? 'rounded-full' : 'rounded'),
      )}
    >
      {children}
    </button>
  );
};

export default Component;
