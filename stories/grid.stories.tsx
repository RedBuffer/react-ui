import * as React from 'react';
import classnames from 'classnames';

import { Col, Row } from '../components';

export default {
  title: 'Grid',
};

const renderCol = (
  text: string | number,
  index: number,
  props: Record<string, unknown> = null,
) => (
  <Col
    {...props}
    height={12}
    key={`col_grid_${index}`}
    className={classnames(
      'py-4',
      'text-sm',
      'text-gray-700',
      index % 2 ? 'bg-gray-500' : 'bg-gray-300',
    )}
  >
    {text}
  </Col>
);

const renderGrid = (length: number) =>
  Array.from({ length }).map((v, i) => renderCol(i + 1, i));

export const Basic = (): React.ReactElement => (
  <>
    <Row justify="center">{renderGrid(24)}</Row>
    <br />
    <Row justify="center">{renderGrid(12)}</Row>
  </>
);

export const FlexStretch = (): React.ReactElement => (
  <Row justify="center">
    {renderCol('2/5', 0, { span: '2/5' })}
    {renderCol('3/5', 1, { span: '3/5' })}
  </Row>
);

export const WithGutter = (): React.ReactElement => (
  <Row gutter={2} justify="center">
    {renderGrid(4)}
  </Row>
);
