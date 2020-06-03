import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  weight?:
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';

  children?: string | number;
}

const Component = ({
  children,
  className,
  weight = 'normal',
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <span {...restProps} className={classnames(className, `font-${weight}`)}>
      {children}
    </span>
  );
};

export default Component;
