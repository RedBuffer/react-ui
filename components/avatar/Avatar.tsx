import * as React from 'react';
import classnames from 'classnames';

type PropTypes = {
  src?: string;

  alt?: string;

  shape?: 'circle' | 'square';

  size?: number | 'large' | 'small' | 'default';

  className?: string;

  children?: React.ReactNode;

  style?: React.CSSProperties;
};

const Component = ({
  src,
  alt,
  size,
  style,
  shape,
  children,
  className,
}: PropTypes): React.ReactElement => {
  let imgSize: number;

  if (typeof size === 'number') {
    imgSize = size;
  } else if (size === 'small') {
    imgSize = 8;
  } else if (size === 'large') {
    imgSize = 16;
  } else {
    imgSize = 12;
  }

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        style={style}
        className={classnames(
          className,
          'shadow-md',
          'text-white',
          'inline-block',
          `h-${imgSize}`,
          `w-${imgSize}`,
          shape === 'square' ? 'rounded-sm' : 'rounded-full',
        )}
      />
    );
  }

  return (
    <span
      style={style}
      className={classnames(
        className,
        'shadow-sm',
        'text-white',
        'bg-gray-400',
        'text-center',
        'inline-block',
        `h-${imgSize}`,
        `w-${imgSize}`,
        shape === 'square' ? 'rounded-sm' : 'rounded-full',
      )}
    >
      {children}
    </span>
  );
};

export default Component;
