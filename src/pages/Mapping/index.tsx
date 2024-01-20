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
// src/pages/Dashboard.tsx
import React from 'react';
import { Layout, Card, Row, Col, Button, Input, Table } from 'antd';
import {  Typography,  Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import MappingContainer from '../../components/Guide/MappingContainer';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: any = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
];

const Dashboard: React.FC = () => (
  <PageContainer>
    <Layout>
      <Layout.Content>
        <Card>
          <Row gutter={12}>
            <Col span={6}>
              <Card title="Mapped Servers Pairs" bordered={true}>
                4 +2% increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Mapped Org-Units" bordered={true}>
                257 +2% increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Mapped Datasets" bordered={true}>
                56 +2% increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card title="%Ge Mapping In Sessions" bordered={true}>
                67% Mapped +2% increase from last month
              </Card>
            </Col>
          </Row>
          <Card style={{ width: 300 }}>
            <p>Source Details</p>
            {/* Add source details here */}
            <Divider />
            <p>Destination Details</p>
            {/* Add destination details here */}
          </Card>
          <Card style={{ width: 300 }}>
            <p>Mapping Stats</p>
            {/* Add mapping stats here */}
          </Card>
          <Row gutter={12}>
            <Col span={4}>
              <Button type="primary">Sessions</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Activity Log</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Mapping</Button>
            </Col>
            <Col span={4}>
              <Button type="primary">Scheduler</Button>
            </Col>
          </Row>
          <h2 className="title_2">New Session</h2>
          <Row gutter={12}>
            <Col span={12}>
              <h4>Server</h4>
              <Input placeholder="KHIS server (source)" />
            </Col>
            <Col span={12}>
              <h4>Server</h4>
              <Input placeholder="3PM Server (Destination)" />
            </Col>
          </Row>
        </Card>
        <Footer>
          <Table columns={columns} dataSource={data} size="small" />
          <MappingContainer />
        </Footer>
      </Layout.Content>
    </Layout>
  </PageContainer>
);

export default Dashboard;
