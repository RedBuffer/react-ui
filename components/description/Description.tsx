import * as React from 'react';
import classnames from 'classnames';

interface DataSource {
  key?: string;

  label: string;

  value?: string;
}

type PropTypes = {
  title: string;

  striped?: boolean;

  description?: string;

  dataSource: DataSource[];
};

const Component = ({
  title,
  striped,
  description,
  dataSource = [],
}: PropTypes): React.ReactElement => {
  return (
    <div
      className={classnames(
        'bg-white',
        'shadow',
        'overflow-hidden',
        'sm:rounded-lg',
      )}
    >
      <div
        className={classnames(
          'px-4',
          'py-5',
          'border-b',
          'border-gray-200',
          'sm:px-6',
        )}
      >
        <h3
          className={classnames(
            'text-lg',
            'leading-6',
            'font-medium',
            'text-gray-900',
          )}
        >
          {title}
        </h3>

        {description ? (
          <p
            className={classnames(
              'mt-1',
              'max-w-2xl',
              'text-sm',
              'leading-5',
              'text-gray-500',
            )}
          >
            Personal details and application.
          </p>
        ) : null}
      </div>

      <div>
        <dl>
          {dataSource.map((data, i) => (
            <div
              key={data.key || `description_row_${i}`}
              className={classnames(
                'border-b',
                striped ? 'border-gray-50' : 'border-gray-200',
                striped && !(i % 2) && 'bg-gray-50',
                'px-4',
                'py-5',
                'sm:grid',
                'sm:grid-cols-3',
                'sm:gap-4',
                'sm:px-6',
              )}
            >
              <dt
                className={classnames(
                  'text-sm',
                  'leading-5',
                  'font-medium',
                  'text-gray-500',
                )}
              >
                {data.label}
              </dt>

              <dd
                className={classnames(
                  'mt-1',
                  'text-sm',
                  'leading-5',
                  'text-gray-900',
                  'sm:mt-0',
                  'sm:col-span-2',
                )}
              >
                {data.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Component;
