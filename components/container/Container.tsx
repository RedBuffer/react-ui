import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fluid?: boolean;

  children?: React.ReactNode;
}

const Component = ({
  fluid,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      {...restProps}
      className={classnames(className, 'container', 'm-auto', !fluid && 'px-5')}
    >
      {children}
    </div>
  );
};

export default Component;
