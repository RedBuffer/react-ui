import * as React from 'react';
import classnames from 'classnames';

type PropTypes = {
  title: string;

  avatar?: string;

  subtitle?: string;
};

const renderBody = (title: string, subtitle: string): React.ReactElement => (
  <>
    <div className={classnames('text-sm', 'leading-5', 'text-gray-900')}>
      {title}
    </div>

    {subtitle ? (
      <div className={classnames('text-sm', 'leading-5', 'text-gray-500')}>
        {subtitle}
      </div>
    ) : null}
  </>
);

const Component = ({
  title,
  avatar,
  subtitle,
}: PropTypes): React.ReactElement => {
  if (avatar) {
    return (
      <div className={classnames('flex', 'items-center')}>
        <div className={classnames('flex-shrink-0', 'h-10', 'w-10')}>
          <img
            src={avatar}
            alt="Avatar"
            className={classnames('h-10', 'w-10', 'rounded-full')}
          />
        </div>

        <div className={classnames('ml-4')}>{renderBody(title, subtitle)}</div>
      </div>
    );
  }

  return renderBody(title, subtitle);
};

export default Component;
