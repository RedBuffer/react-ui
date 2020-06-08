import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children?: string | number;

  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
}

const Component = ({
  children,
  className,
  size = 'base',
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <p {...restProps} className={classnames(className, `text-${size}`)}>
      {children}
    </p>
  );
};

export default Component;
