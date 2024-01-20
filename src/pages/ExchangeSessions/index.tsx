// import React from 'react';
// import { Layout, Card } from 'antd';
// import { PageContainer } from '@ant-design/pro-layout';

// const { Sider } = Layout;

// const Dashboard: React.FC = () => {
//   return (
//     <PageContainer>
//       <Layout> 
//         <Layout.Content>
//           <Card>
            
//           </Card>
//         </Layout.Content>
//       </Layout>
//     </PageContainer>
//   );
// };

// export default Dashboard;
// src/pages/ExchangeSessions.tsx
import React from 'react';
import { Card, Row, Col, Button, Input, Table, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import MappingContainer from '../../components/Guide/MappingContainer';

interface DataType {
  key: React.Key;
  Source: string;
  Destination: string;
  Map: string;
}

const columns: any = [
  {
    title: 'Source',
    dataIndex: 'source',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
  },
  {
    title: 'Map',
    dataIndex: 'map',
  },
];

const data: DataType[] = [
  {
    key: '1',
    Source: 'Org-unit 1 Server 1',
    Destination: 'Org-unit 1 Server 2',
    Map: 'unmap',
  },
  {
    key: '2',
    Source: 'Org-unit 2 Server 1',
    Destination: 'Org-unit 2 Server 2',
    Map: 'unmap',
  },
  {
    key: '3',
    Source: 'Org-unit 3 Server 1',
    Destination: 'Org-unit 3 Server 2',
    Map: 'unmap',
  },
  {
    key: '4',
    Source: 'Org-unit 4 Server 1',
    Destination: 'Org-unit 4 Server 2',
    Map: 'unmap',
  },
  {
    key: '5',
    Source: 'Org-unit 5 Server 1',
    Destination: 'Org-unit 5 Server 2',
    Map: 'unmap',
  },
];

const ExchangeSessions: React.FC = () => (
  <PageContainer>
    <div style={{ padding: 24 }}>
      <h2 className='title_2'></h2>
      <Row gutter={12}>
        {/* Your content goes here */}
      </Row>
      <h2 className='title_2'></h2>
      <Card style={{ width: 300 }}>
        {/* Your Card content goes here */}
      </Card>
      <h2 className='title_2'></h2>
      <Card style={{ width: 300 }}>
        {/* Your Card content goes here */}
      </Card>
      <Row gutter={[1, 1]}>
        {/* Your Row content goes here */}
      </Row>
      <h2 className='title_2'>New Session</h2>
      <Row gutter={[1, 1]}>
        {/* Your Row content goes here */}
      </Row>
      <Row gutter={[12, 12]}>
        {/* Your Row content goes here */}
      </Row>
      <h2></h2>
      <Row gutter={12}>
        {/* Your Row content goes here */}
      </Row>
      <Divider />
      <MappingContainer />
      <Divider />
      <Table columns={columns} dataSource={data} size="small" />
    </div>
  </PageContainer>
);

export default ExchangeSessions;
