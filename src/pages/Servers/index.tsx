import React from 'react';
import { Layout, Typography, Space, Row, Col, Card, Mentions, Divider, Table } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import {  BellTwoTone } from '@ant-design/icons';
import { Avatar } from "antd";

const { Header, Footer, Content } = Layout;
const { Text } = Typography;
const { Column } = Table;

const data = [
  {
    key: '1',
    serverName: 'KHIS Server',
    serverURL: 'http://khis.health.go.ke',
    lastSyncDate: '17/07/2023 13:00',
    syncStatus: 'Complete',
    linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
  },
  {
    key: '2',
    serverName: '3PM Server',
    serverURL: 'http://3pm.nascop.org',
    lastSyncDate: '12/07/2023 12:20',
    syncStatus: 'Complete',
    linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
  },
  {
    key: '3',
    serverName: 'DATIM Server',
    serverURL: 'http://datim.org',
    lastSyncDate: '01/07/2023 04:25',
    syncStatus: 'Pending',
    linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
  },
  {
    key: '4',
    serverName: 'DHIS2 Server',
    serverURL: 'http://dhis2server2.com',
    lastSyncDate: '17/07/2023 13:00',
    syncStatus: 'Failed',
    linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
  },
  {
    key: '5',
    serverName: 'KHIS Server',
    serverURL: 'http://dhisserver3.org',
    lastSyncDate: '17/07/2023 13:00',
    syncStatus: 'Failed',
    linkedSessions: ['&#xe8b6;', '&#xe8b6;', '&#xe8b6;'],
  },
];

const Servers: React.FC = () => (
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
        <h2 className='title' style={{ fontSize:'36px', fontFamily:'Inter',fontStyle:'normal',lineHeight:'44px',fontWeight:'400'}}>Servers</h2>
        <h3 className='sub-title' style={{fontFamily:'Inter',fontSize:'24px',fontStyle:'normal',lineHeight:'32px',color:'#A1A1A1'}}>DHIS2 Instances</h3>
        <Row gutter={16}>
          <Col span={8}>
  <Card
    className='new'
    title="Total Servers"
    bordered={true}
    headStyle={{
      fontFamily: 'Inter',
      fontSize: '24px',
      fontStyle: 'normal',
      lineHeight: '32px',
      fontWeight: '400',
      color: '#2F286E', 
    }}
  >
    <h1 className='num-1' >
      5
    </h1>
  </Card>
</Col>
<Col span={8}>
  <Card
    className='new'
    title="Mapped Sessions"
    bordered={true}
    headStyle={{
      fontFamily: 'Inter',
      fontSize: '24px',
      fontStyle: 'normal',
      lineHeight: '32px',
      fontWeight: '400',
      color: '#2F286E', 
    }}
  >
    <h1  className='num-1'>2</h1>
  </Card>
</Col>
<Col span={8}>
  <Card
    className='new'
    title="Average sync Timeline"
    bordered={true}
    headStyle={{
      fontFamily: 'Inter',
      fontSize: '24px',
      fontStyle: 'normal',
      lineHeight: '32px',
      fontWeight: '400',
      color: '#2F286E', 
    }}
  >
   <h1 className='num-2'>1 Month</h1>
  </Card>
</Col>    
        </Row>
        <Divider></Divider>
        <Mentions
          style={{ width: '100%' }}
          placement='top'
          options={[
            {
              value: 'yesmeck',
              label: 'search'
            }
          ]}
        />
      </Content>
      <Footer>
        <Divider></Divider>
        <div className="servers-table-container">
          <Table dataSource={data} className="table servers-table" pagination={false}>
            <Column title="Server Name" dataIndex="serverName" key="serverName" />
            <Column title="Server URL" dataIndex="serverURL" key="serverURL" />
            <Column title="Last Sync Date" dataIndex="lastSyncDate" key="lastSyncDate" />
            <Column title="Sync Status" dataIndex="syncStatus" key="syncStatus"
              render={(text: string) => {
                let color: string;

                switch (text) {
                  case 'Failed':
                    color = 'red';
                    break;
                  case 'Complete':
                    color = 'green';
                    break;
                  case 'Pending':
                    color = 'grey';
                    break;
                  default:
                    color = 'black';
                }
                return <span style={{ color }}>{text}</span>;
              }}
            />
            <Column
              title="Linked Sessions"
              dataIndex="linkedSessions"
              key="linkedSessions"
              render={(linkedSessions: string[]) => (
                <Space size="middle">
                  {linkedSessions.map((symbol, index) => (
                    <span key={index} dangerouslySetInnerHTML={{ __html: symbol }} />
                  ))}
                </Space>
              )}
            />
            <Column
              title="View More"
              key="action"
              render={() => (
                <Space size="middle">
                  <span >▶</span>
                  <p className='span'>view more</p>
                </Space>
              )}
            />
          </Table>
        </div>
      </Footer>
    </Layout>
  </PageContainer>
);

export default Servers;
