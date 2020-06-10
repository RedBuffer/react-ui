import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

const Component = ({
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div {...restProps} className={classnames(className, 'flex-shrink-0')}>
      {children}
    </div>
  );
};

export default Component;
