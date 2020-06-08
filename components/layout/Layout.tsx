import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode;
}

const Component = ({
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <section {...restProps} className={classnames(className)}>
      {children}
    </section>
  );
};

export default Component;
