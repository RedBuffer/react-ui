import * as React from 'react';

import { Typography } from '../components';

export default {
  title: 'Typography',
  component: Typography,
};

export const Title = (): React.ReactElement => (
  <>
    <Typography.Title level={1}>h1. React UI</Typography.Title>
    <Typography.Title level={2}>h2. React UI</Typography.Title>
    <Typography.Title level={3}>h3. React UI</Typography.Title>
    <Typography.Title level={4}>h4. React UI</Typography.Title>
    <Typography.Title level={5}>h5. React UI</Typography.Title>
  </>
);

export const Paragraph = (): React.ReactElement => (
  <>
    <Typography.Paragraph size="3xl">
      3xl. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="2xl">
      2xl. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="xl">
      xl. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="lg">
      lg. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="base">
      base. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="sm">
      sm. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
    <Typography.Paragraph size="xs">
      xs. The quick brown fox jumped over the lazy dog.
    </Typography.Paragraph>
  </>
);

export const Text = (): React.ReactElement => (
  <>
    <Typography.Text weight="hairline">Hairline Text</Typography.Text>
    <br />
    <Typography.Text weight="thin">Thin Text</Typography.Text>
    <br />
    <Typography.Text weight="light">Light Text</Typography.Text>
    <br />
    <Typography.Text weight="normal">Normal Text</Typography.Text>
    <br />
    <Typography.Text weight="medium">Medium Text</Typography.Text>
    <br />
    <Typography.Text weight="semibold">Semibold Text</Typography.Text>
    <br />
    <Typography.Text weight="bold">Bold Text</Typography.Text>
    <br />
    <Typography.Text weight="extrabold">Extrabold Text</Typography.Text>
    <br />
    <Typography.Text weight="black">Black Text</Typography.Text>
  </>
);

export const Link = (): React.ReactElement => (
  <Typography.Link
    href="#"
    onClick={(e) => {
      e.preventDefault();
      alert('You clicked me!');
    }}
  >
    Click Me
  </Typography.Link>
);
