import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  size?: 'sm' | 'md' | 'lg';
}

const Component = ({
  className,
  size = 'md',
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <textarea
      {...restProps}
      className={classnames(
        className,
        'px-2',
        'py-2',
        'border',
        'w-full',
        'rounded',
        'shadow-sm',
        'transition',
        'ease-in-out',
        'duration-150',
        'text-default',
        `text-${size}`,
        'leading-tight',
        'appearance-none',
        'focus:outline-none',
        'focus:shadow-outline',
        'hover:border-blue-500',
      )}
    />
  );
};

export default Component;
