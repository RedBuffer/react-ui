import * as React from 'react';

import { Description } from '../components';

export default {
  title: 'Description',
  component: Description,
};

const application = [
  { label: 'Full name', value: 'Margot Foster' },
  { label: 'Application for', value: 'Backend Developer' },
  { label: 'Email address', value: 'margotfoster@example.com' },
  { label: 'Salary expectation', value: '$120,000' },
  {
    label: 'About',
    value:
      'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
  },
];

export const Basic = (): React.ReactElement => (
  <Description
    title="Applicant Information"
    description="Personal details and application."
    dataSource={application}
  />
);

export const Striped = (): React.ReactElement => (
  <Description
    striped
    title="Applicant Information"
    description="Personal details and application."
    dataSource={application}
  />
);
