import * as React from 'react';
import classnames from 'classnames';

import Button from './Button';

type PropTypes = {
  total: number;

  current: number;

  disabled?: boolean;

  onChange: (page: number) => void;
};

const LIMIT = 1;

const Component = ({
  total,
  current,
  disabled,
  onChange,
}: PropTypes): React.ReactElement => {
  const renderEllipsis = (): React.ReactElement => (
    <span
      className={classnames(
        '-ml-px',
        'relative',
        'inline-flex',
        'items-center',
        'px-4',
        'py-2',
        'border',
        'border-gray-300',
        disabled ? 'bg-gray-100' : 'bg-white',
        'text-sm',
        'leading-5',
        'font-medium',
        'text-gray-700',
      )}
    >
      ...
    </span>
  );

  return (
    <nav className="relative z-0 inline-flex shadow-sm">
      <Button
        aria-label="Previous"
        disabled={disabled || current <= 1}
        onClick={() => onChange(current - 1)}
        className={classnames(
          'px-2',
          'rounded-l-md',
          'text-gray-500',
          'border-gray-300',
        )}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={classnames('h-5', 'w-5')}
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {current - (LIMIT + 1) > 0 ? (
        <>
          <Button
            disabled={disabled}
            onClick={() => onChange(1)}
            className={classnames('px-4', '-ml-px', 'text-gray-700')}
          >
            1
          </Button>

          {renderEllipsis()}
        </>
      ) : null}

      {Array.from({ length: total })
        .map((v, i) => i + 1)
        .filter((val) => val >= current - LIMIT && val <= current + LIMIT)
        .map((val) => (
          <Button
            disabled={disabled}
            key={`pagination_btn_${val}`}
            onClick={() => onChange(val)}
            className={classnames(
              'px-4',
              '-ml-px',
              'text-gray-700',
              !disabled && current === val ? 'bg-gray-200' : 'bg-white',
            )}
          >
            {val}
          </Button>
        ))}

      {current + LIMIT < total ? (
        <>
          {renderEllipsis()}

          <Button
            disabled={disabled}
            onClick={() => onChange(total)}
            className={classnames('px-4', '-ml-px', 'text-gray-700')}
          >
            {total}
          </Button>
        </>
      ) : null}

      <Button
        aria-label="Previous"
        disabled={disabled || current >= total}
        onClick={() => onChange(current + 1)}
        className={classnames(
          'px-2',
          '-ml-px',
          'rounded-r-md',
          'text-gray-500',
          'border-gray-300',
        )}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={classnames('h-5', 'w-5')}
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </nav>
  );
};

export default Component;
