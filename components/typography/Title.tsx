import * as React from 'react';
import classnames from 'classnames';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children?: string | number;

  level?: 1 | 2 | 3 | 4 | 5;
}

const Component = ({
  level,
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  switch (level) {
    default:
    case 1:
      return (
        <h1
          {...restProps}
          className={classnames(className, 'font-bold', 'text-6xl')}
        >
          {children}
        </h1>
      );

    case 2:
      return (
        <h2
          {...restProps}
          className={classnames(className, 'font-bold', 'text-5xl')}
        >
          {children}
        </h2>
      );

    case 3:
      return (
        <h3
          {...restProps}
          className={classnames(className, 'font-bold', 'text-4xl')}
        >
          {children}
        </h3>
      );

    case 4:
      return (
        <h4
          {...restProps}
          className={classnames(className, 'font-bold', 'text-3xl')}
        >
          {children}
        </h4>
      );

    case 5:
      return (
        <h5
          {...restProps}
          className={classnames(className, 'font-bold', 'text-2xl')}
        >
          {children}
        </h5>
      );
  }
};

export default Component;
