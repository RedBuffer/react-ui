import * as React from 'react';

interface PropTypes
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

const Component = ({
  children,
  className,
  ...restProps
}: PropTypes): React.ReactElement => {
  const classname = `${
    className ? `${className} ` : ''
  }paper rounded shadow-md`;

  return (
    <>
      <div className={classname} {...restProps}>
        {children}
      </div>

      <style jsx>{`
        .paper {
          padding: 10px;
          background: white;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
};

export default Component;
