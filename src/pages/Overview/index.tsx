import React from 'react';
import { Layout, Typography, Space, Card, Row, Col, Progress, Table, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import {  BellTwoTone } from '@ant-design/icons';
import { Avatar } from "antd";
import './index.less'
const { Header, Footer, Content } = Layout;
const { Text } = Typography;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  paddingInline: 48,
  height: 64,
  color: '#fff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
  backgroundColor: '#FFFFFF',
};

interface DataType {
  key: string;
  name: string;
  address: string;
  tags: string[];
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_: any, { tags }: { tags?: string[] }) => (
      <>
        {tags && tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: DataType) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'KHIS/DATIM',
    address: 'Nairobi County Facilities',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'KHIS/3 PM',
    address: 'All Counties',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'DHIS2 Server 2/DHIS2 Server 3',
    address: 'Sub-county Level',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'DHIS2 Server 1/DHIS Server 3',
    address: 'National Level',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'DHIS2 Server 4/DHIS2 Server 5',
    address: 'CDC Program Facilities',
    tags: ['cool', 'teacher'],
  },
];

const Overview: React.FC = () => (
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
      <Content>
        <h2 className='title_2'>Overview</h2>
        <h3 className='title_3'>Status Summary</h3>
        <Row gutter={12}>
        <Col span={6}>
      <Card className="new" title={<span className="card-title">Servers</span>}  bordered={true}>
        18
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title={<span className='card-title'>Sessions</span>} bordered={true}>
        4
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title={<span className='card-title'>Mapped Servers</span>} bordered={true}>
        12
      </Card>
    </Col>
    <Col span={6}>
      <Card className="new" title={<span className='card-title'>Reporting API's</span>} bordered={true}>
       5
      </Card>
    </Col>
        </Row>
        <h3 className='title_3'></h3>
        <Row gutter={18}>
        <Col span={12}>
      <Card title={<span className='card-title'>Data Exchange Outcomes</span>} bordered={true}/>
    </Col>
    <Col span={12}>
    <Card title={<span className='card-title'>Data Exchange Sessions</span>} bordered= {false}>
       Session A  <Progress percent={80} />
       Session B  <Progress percent={60} />
       Session C  <Progress percent={40} />
       Session D  <Progress percent={20} />
    </Card>
    </Col>
        </Row>
        <h3 className='title_3'>Performance</h3>
        <Row gutter={12}>
        <Col span={8}>
      <Card className="new" title={<span className='card-title'>Active Servers</span>} bordered={true}>
        6
        <h5 className='khis'>
        . KHIS - 257 Mbps        
        . DATIM - 256 Mbps
        </h5>
      </Card>
    </Col>
    <Col span={8}>
      <Card className="new" title={<span className='card-title'>Data Mapping</span>} bordered={true}>
        3,500
        <h5 className='khis'>
        .KHIS/DHIS-256
        .DATIM/3PM-158
        </h5>
      </Card>
    </Col>
    <Col span={8}>
      <Card className="new" title={<span className='card-title'>Data Migrated</span>} bordered={true}>
        1.4 Gb
        <h5 className='khis'>
        .KHIS Server-847 Mb
        .DATIM Server-746 Mb
        </h5>
      </Card>
    </Col>
        </Row>
      </Content>
      <Footer>
        <Table columns={columns} dataSource={data} />
      </Footer>
    </Layout>
  </PageContainer>
);

export default Overview;
