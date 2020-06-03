import * as React from 'react';
import * as get from 'lodash.get';
import classnames from 'classnames';

type Column = {
  title?: string;

  dataIndex?: string;

  render?: (
    text: string,
    record: Record<string, unknown>,
    index: number,
  ) => React.ReactNode | string | number | null;
};

type DataSource = {
  key?: string;

  [s: string]: any;
};

interface TableProps
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  columns: Column[];

  responsive?: boolean;

  striped?: boolean;

  dataSource: DataSource[];
}

const Component = ({
  striped,
  columns,
  className,
  dataSource = [],
  responsive = false,
  ...restProps
}: TableProps): React.ReactElement => {
  return (
    <table
      {...restProps}
      className={classnames(className, responsive && 'min-w-full', 'bg-white')}
    >
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th
              key={`tbl_ col_${i}_${column.title}`}
              className={classnames(
                'px-6',
                'py-3',
                'text-xs',
                'border-b',
                'leading-4',
                'text-left',
                'uppercase',
                'bg-gray-50',
                'font-medium',
                'text-gray-500',
                'tracking-wider',
                'border-gray-200',
              )}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dataSource.map((data, i) => (
          <tr
            key={data.key || `tbl_row_${i}`}
            className={classnames(striped && i % 2 && 'bg-gray-50')}
          >
            {columns.map((column, j) => (
              <td
                key={`tbl_row_col_${j}_${column.title}`}
                className={classnames(
                  'px-6',
                  'py-4',
                  'text-sm',
                  'border-b',
                  'leading-5',
                  'text-gray-600',
                  'border-gray-200',
                  'whitespace-no-wrap',
                )}
              >
                {typeof column.render === 'function'
                  ? column.render(
                      column.dataIndex
                        ? String(get(data, column.dataIndex))
                        : null,
                      data,
                      i,
                    )
                  : column.dataIndex
                  ? String(get(data, column.dataIndex))
                  : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Component;
