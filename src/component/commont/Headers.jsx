
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
import { FaTasks } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';
import { useRouter } from 'next/navigation';
const { Header, Sider, Content } = Layout;

const Headers = () => {
  return (
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
  );
};

export default Headers;