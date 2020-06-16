import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends Omit<
    React.DetailedHTMLProps<
      React.OptionHTMLAttributes<HTMLOptionElement>,
      HTMLOptionElement
    >,
    'size'
  > {
  children?: React.ReactNode;
}

const Component = ({
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <option {...restProps} className={classnames(className)}>
      {children}
    </option>
  );
};

export default Component;
