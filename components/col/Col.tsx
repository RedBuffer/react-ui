import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  sm?: string;

  md?: string;

  lg?: string;

  xl?: string;

  span?: string;

  height?: number;

  children?: React.ReactNode;
}

const Component = ({
  sm,
  md,
  lg,
  xl,
  span,
  height,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      {...restProps}
      className={classnames(
        className,
        sm && `sm:w-${sm}`,
        md && `md:w-${md}`,
        lg && `lg:w-${lg}`,
        xl && `xl:w-${xl}`,
        height && `h-${height}`,
        span ? `w-${span}` : 'flex-1',
      )}
    >
      {children}
    </div>
  );
};

export default Component;
