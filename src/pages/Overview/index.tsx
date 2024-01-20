// src/pages/Overview.tsx
import React from 'react';
import { Layout, Typography, Space, Card, Row, Col, Progress, Table, Tag } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

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
      <Content>
        <h2 className='title_2'>Overview</h2>
        <h3 className='title_3'>Status Summary</h3>
        <Row gutter={12}>
          {/* Your content goes here */}
        </Row>
        <h3 className='title_3'></h3>
        <Row gutter={18}>
          {/* Your content goes here */}
        </Row>
        <h3 className='title_3'>Performance</h3>
        <Row gutter={12}>
          {/* Your content goes here */}
        </Row>
      </Content>
      <Footer>
        <Table columns={columns} dataSource={data} />
      </Footer>
    </Layout>
  </PageContainer>
);

export default Overview;
