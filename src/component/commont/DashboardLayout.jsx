"use client"
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';
import { FaProjectDiagram, FaTasks } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { useRouter } from 'next/navigation';
const { Header, Sider, Content } = Layout;



const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logOut = () => {
    // removeUserInfo(authKey);
    router.push("/login");
  };

  const items = [
    {
      key: "0",
      label: (
        <Button onClick={logOut}  type="text" danger>
         {/* <IoMdLogOut /> */}
          Logout
        </Button>
      )
    }
  ]
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onChange={(value) =>logOut (value) }
        
        items={[
          {
            key: '1',
            icon: <MdDashboard />,
            label: <Link href={`/dashboard`}>Dashboard</Link>
          },
          {
            key: '2',
            icon: <FaProjectDiagram />,
            label: <Link href={`/projects`}>Project Overview </Link>
          },
          {
            key: '3',
            icon: <FaTasks />,
            label: <Link href={`/task`}>Task</Link>
          },
          {
            key:  '4',
            icon: <MdSettings />,
            label: <Link href={`/setting`}>Settings</Link>
          },
          // {
          //   key: '4',
          //   icon: <IoMdLogOut />,
          //   label: "Logout"
          // },
        ]}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
         <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
        {/* <Avatar>U</Avatar> */}
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
  );
};

export default DashboardLayout;