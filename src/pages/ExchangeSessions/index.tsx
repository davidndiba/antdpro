import React from 'react';
import { Card, Row, Col, Button, Input, Table, Divider, Typography, Space, Avatar } from 'antd';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import MappingContainer from '../../components/Guide/MappingContainer';
import { BellTwoTone } from '@ant-design/icons';

const { Text } = Typography;

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
    <ProLayout>
      <Space direction="vertical" style={{ width: '100%' }}>
        <div style={{ padding: '0 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
        </div>
        <div style={{ padding: 24 }}>
          <h2 className='title_2'></h2>
          <Row gutter={12}>
          <Col span={6}>
      <Card title="Active Sessions" bordered={true}>
        6
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Transfer Jobs" bordered={true}>
        137/258
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Failed Jobs" bordered={true}>
        12
        +2%increase from last month
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Avg Data Transfer Rate" bordered={true}>
       256 Mbps
       +2%increase from last month
      </Card>
    </Col>
          </Row>
          <h2 className='title_2'></h2>
          <Card style={{ width: 300 }}>
          <p>Source Details</p>
    <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
    <Divider></Divider>
    <p>Destination Details</p>
    <p>Server name: DHIS2 Server 1</p>
    <p>URL: http://...</p>
    <p>Last Synced: 13th Jul,2023 13:00</p>
    <p>Active: Yes</p>
    <p>Data Exchange:935 Mb</p>
    <p>Exchange Rate: 256 Mbps</p>
          </Card>
          <h2 className='title_2'></h2>
          <Card style={{ width: 300 }}>
          <p>Mapping Stats</p>
          <p>Org Units Mapped - 95%</p>
          <p>Dataset Mapped - 52%</p>
          </Card>
          <Row gutter={[1, 1]}>
          <Col span={6}>
    <Button type="primary">
      Sessions
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Activity Log
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Mapping
    </Button>
  </Col>
  <Col span={6}>
    <Button type="primary">
      Scheduler
    </Button>
  </Col>
          </Row>
          <h2 className='title_2'>New Session</h2>
          <Row gutter={[1, 1]}>
          <Col span={12}>
      <h4>Server</h4>
      <Input placeholder="KHIS server (source)" />
    </Col>
    <Col span={12}>
      <h4>Server</h4>
      <Input placeholder="3PM Server (Destination)" />
    </Col>
  </Row>
  <Row gutter={[12, 12]}>
    <Col span={12}>
      <Input placeholder="Program Indicators" />
    </Col>
    <Col span={12}>
      <Input placeholder="Data Elements" />
    </Col>
          </Row>
          <Row gutter={[12, 12]}>
          <Col span={12}>
      <h4> Session Type</h4>
      <Input placeholder="KHIS server (source)" />
    </Col>
    <Col span={12}>
    <h4> Session Type</h4>
      <Input placeholder="3PM Server (Destination)" />
    </Col>
          </Row>
          <h2></h2>
          <Row gutter={12}>
          </Row>
          <Divider />
          <MappingContainer />
          <Divider />
          <Table columns={columns} dataSource={data} size="small" />
        </div>
      </Space>
    </ProLayout>
  </PageContainer>
);

export default ExchangeSessions;
