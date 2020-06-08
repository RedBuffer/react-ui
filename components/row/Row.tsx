import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  height?: number;

  align?: 'start' | 'center' | 'end' | 'between' | 'around';

  justify?: 'center';

  gutter?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 8
    | 10
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64;

  children?: React.ReactNode;
}

const Component = ({
  align,
  height,
  justify,
  children,
  className,
  gutter = 0,
  ...restProps
}: PropTypes): React.ReactElement => {
  return (
    <div
      {...restProps}
      className={classnames(
        className,
        'flex',
        `gap-${gutter}`,
        height && `h-${height}`,
        align && `content-${align}`,
        justify && `text-${justify}`,
      )}
    >
      {children}
    </div>
  );
};

export default Component;
