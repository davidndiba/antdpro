import React from 'react';
import { Layout, Card,Space, Row, Col, Button, Input, Table } from 'antd';
import {  Typography,  Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import MappingContainer from '../../components/Guide/MappingContainer';
import {  BellTwoTone } from '@ant-design/icons';
import { Avatar } from "antd";
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
    <Header className='head' style={{ backgroundColor: 'white', padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text className="home" style={{ color: '#A1A1A1' }} type="secondary">
          Home
        </Text>

        <Space className='icon'>
          <BellTwoTone style={{ fontSize: '24px', color: '#fff' }} />
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Text style={{ color: '#A1A1A1' }} type="secondary">
            John Doe
          </Text>
        </Space>
      </Header>
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
            <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
            <Divider />
            <p>Destination Details</p>
            <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
          </Card>
          <Card style={{ width: 300 }}>
            <p>Mapping Stats</p>
            <p>Org Units Mapped - 95%</p>
            <p>Dataset Mapped - 52%</p>
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
