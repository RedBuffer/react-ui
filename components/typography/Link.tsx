import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;

  children?: string;

  className?: string;
}

const Component = ({
  href,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <a
      {...restProps}
      href={href}
      className={classnames(
        className,
        'underline',
        'outline-none',
        'text-blue-500',
      )}
    >
      {children}
    </a>
  );
};

export default Component;
