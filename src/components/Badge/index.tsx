import * as React from 'react';
import classnames from 'classnames';

import * as classes from '../../config/classes';

type Type =
  | 'dark'
  | 'info'
  | 'light'
  | 'danger'
  | 'primary'
  | 'success'
  | 'warning'
  | 'secondary';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type PropTypes = {
  type?: Type;

  size?: Size;

  children?: string;

  className?: string;
};

const Component = ({
  size,
  type,
  children,
  className,
}: PropTypes): React.ReactElement => {
  let color: string;
  let background: string;

  if (type === 'primary') {
    color = classes.textPrimary;
    background = classes.bgPrimary;
  } else if (type === 'secondary') {
    color = classes.textSecondary;
    background = classes.bgSecondary;
  } else if (type === 'dark') {
    color = classes.textDark;
    background = classes.bgDark;
  } else if (type === 'light') {
    color = classes.textLight;
    background = classes.bgLight;
  } else if (type === 'warning') {
    color = classes.textWarning;
    background = classes.bgWarning;
  } else if (type === 'danger') {
    color = classes.textDanger;
    background = classes.bgDanger;
  } else if (type === 'info') {
    color = classes.textInfo;
    background = classes.bgInfo;
  } else if (type === 'success') {
    color = classes.textSuccess;
    background = classes.bgSuccess;
  } else {
    color = classes.textDefault;
    background = classes.bgDefault;
  }

  return (
    <span
      className={classnames(
        className,
        'px-2',
        'inline-flex',
        size && `text-${size}`,
        'leading-1',
        'font-semibold',
        'rounded-full',
        background,
        color,
      )}
    >
      {children}
    </span>
  );
};

export default Component;
