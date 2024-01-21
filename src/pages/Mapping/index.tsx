import React from 'react';
import { Layout, Card,Space, Row, Col, Button, Input, Table } from 'antd';
import {  Typography,  Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import MappingContainer from '../../components/Guide/MappingContainer';
import {  BellTwoTone } from '@ant-design/icons';
import { Avatar } from "antd";
import './index.less'
const { Header, Content, Footer } = Layout;
const { Text } = Typography;

interface DataType {
  key: React.Key;
  source: string;
  destination: string;
  map: string;
}

const columns: any = [
  {
    title: 'Source',
    dataIndex: 'source',
    render: (text: string) => (
      <span style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', display: 'block' }}>{text}</span>
    ),
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    render: (text: string) => (
      <span style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold', display: 'block' }}>{text}</span>
    ),
  },
  {
    title: '',
    dataIndex: 'map',
    render: (text: string) => (
      <span style={{ display: 'block' }}>{text}</span>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    source: 'Org-unit 1 Server 1',
    destination: 'Org-unit 1 Server 2',
    map: 'Unmap',
  },
  {
    key: '2',
    source: 'Org-unit 2 Server 1',
    destination: 'Org-unit 2 Server 2',
    map: 'Unmap',
  },
  {
    key: '3',
    source: 'Org-unit 3 Server 1',
    destination: 'Org-unit 3 Server 2',
    map: 'Unmap',
  },
  {
    key: '4',
    source: 'Org-unit 4 Server 1',
    destination: 'Org-unit 4 Server 2',
    map: 'Unmap',
  },
  {
    key: '5',
    source: 'Org-unit 5 Server 1',
    destination: 'Org-unit 5 Server 2',
    map: 'Unmap',
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
              <Card className='new' title={<span className='card-title'>Mapped Servers Pairs</span>} bordered={true}>
                4 <span className='colored'>+2%</span>increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card className='new' title={<span className='card-title'>Mapped Org-Units</span>} bordered={true}>
                257 <span className='colored'>+2%</span> increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card className='new' title={<span className='card-title'>Mapped Datasets</span>} bordered={true}>
                56 <span className='colored'>+2%</span> increase from last month
              </Card>
            </Col>
            <Col span={6}>
              <Card className='new' title={<span className='card-title'>%Ge Mapping In Sessions</span>} bordered={true}>
                67% Mapped <span className='colored'>+2%</span> increase from last month
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
