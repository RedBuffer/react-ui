import * as React from 'react';

import { Badge, Media, Table } from '../components';

export default {
  title: 'Table',
  component: Table,
};

const employees = [
  {
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Bernard Lane',
    email: 'bernardlane@example.com',
    title: 'Director',
    department: 'Human Resource',
    status: true,
    role: 'Owner',
  },
  {
    image:
      'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Bernard Lane',
    email: 'bernardlane@example.com',
    title: 'Director',
    department: 'Human Resource',
    status: true,
    role: 'Owner',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Bernard Lane',
    email: 'bernardlane@example.com',
    title: 'Director',
    department: 'Human Resource',
    status: false,
    role: 'Owner',
  },
  {
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Bernard Lane',
    email: 'bernardlane@example.com',
    title: 'Director',
    department: 'Human Resource',
    status: false,
    role: 'Owner',
  },
];

const renderBadge = (text) => {
  if (text === 'true') {
    return (
      <Badge size="xs" type="success">
        Active
      </Badge>
    );
  }

  return (
    <Badge size="xs" type="danger">
      Inactive
    </Badge>
  );
};

const renderMedia = (title, subtitle = null, avatar = null) => (
  <Media avatar={avatar} title={title} subtitle={subtitle} />
);

const renderEdit = (name) => (
  <div className="text-right">
    <a href={`#${name}`} className="text-indigo-600 hover:text-indigo-900">
      Edit
    </a>
  </div>
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, record) => renderMedia(text, record.email, record.image),
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text, record) => renderMedia(text, record.department),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: renderBadge,
  },
  { title: 'Role', dataIndex: 'role' },
  {
    dataIndex: 'name',
    render: renderEdit,
  },
];

export const Basic = (): React.ReactElement => (
  <Table columns={columns} dataSource={employees} />
);

export const Striped = (): React.ReactElement => (
  <Table striped columns={columns} dataSource={employees} />
);

export const Reponsive = (): React.ReactElement => (
  <Table responsive columns={columns} dataSource={employees} />
);
