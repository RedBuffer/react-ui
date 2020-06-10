import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  src?: string;
}

const Component = ({
  src,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <button
      {...restProps}
      className={classnames(
        className,
        'border-2',
        'transition',
        'ease-in-out',
        'duration-150',
        'flex text-sm',
        'rounded-full',
        'border-transparent',
        'focus:outline-none',
        'focus:border-white',
      )}
      aria-haspopup="true"
    >
      <img
        src={src}
        alt="avatar"
        className={classnames('h-8', 'w-8', 'rounded-full')}
      />
    </button>
  );
};

export default Component;
