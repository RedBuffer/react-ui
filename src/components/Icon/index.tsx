import * as React from 'react';

type PropTypes = {
  spin?: boolean;

  type: 'spinner';

  className?: string;
};

const Component = ({
  spin,
  type,
  className,
}: PropTypes): React.ReactElement => {
  let classname = className ? `${className} icon-${type}` : `icon-${type}`;

  if (spin) {
    classname += ' spin';
  }

  return (
    <>
      <div className={classname} />

      <style jsx>{`
        .icon-spinner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 4px solid #fcd779;
          border-top: 4px solid white;
        }

        .spin {
          -webkit-animation-name: rotate;
          -webkit-transition-duration: 1.2s;
          -webkit-animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;
          -webkit-transition-property: -webkit-transform;

          -moz-animation-name: rotate;
          -moz-animation-duration: 1.2s;
          -moz-animation-timing-function: linear;
          -moz-animation-iteration-count: infinite;
          -moz-transition-property: -moz-transform;

          animation-name: rotate;
          animation-duration: 1.2s;
          transition-property: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @-webkit-keyframes rotate {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }

        @-moz-keyframes rotate {
          from {
            -moz-transform: rotate(0deg);
          }
          to {
            -moz-transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Component;
