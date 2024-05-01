"use client"
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';
const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/dashboard']}
        items={[
          {
            key: '/dashboard',
            icon: <MdDashboard />,
            label: <Link href={`/dashboard`}>Dashboard</Link>
          },
          {
            key: '/task',
            icon: <FaTasks />,
            label: <Link href={`/task`}>Task</Link>
          },
          {
            key: '/settings',
            icon: <MdSettings />,
            label: <Link href={`/setting`}>Settings</Link>
          },
          {
            key: '4',
            icon: <IoMdLogOut />,
            label: "Logout"
          },
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
        <Avatar>U</Avatar>
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