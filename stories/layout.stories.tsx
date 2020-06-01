import * as React from 'react';

import Layout from '../src/components/Layout';

export default {
  title: 'Layout',
  component: Layout,
};

export const Basic = (): React.ReactElement => (
  <Layout className=" text-gray-700 text-center">
    <Layout.Header className="bg-gray-300 p-5" style={{ height: '15vh' }}>
      Header
    </Layout.Header>

    <Layout.Content className="bg-gray-400 p-5" style={{ height: '75vh' }}>
      Content
    </Layout.Content>

    <Layout.Footer className="bg-gray-300 p-5" style={{ height: '10vh' }}>
      Footer
    </Layout.Footer>
  </Layout>
);
