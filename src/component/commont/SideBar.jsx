"use client"
;

import React, { useState } from 'react';

import {  Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';
import { FaTasks } from 'react-icons/fa';
import { MdDashboard, MdSettings } from 'react-icons/md';
const {  Sider, } = Layout;
const SideBar = ({ collapsed, setCollapsed }) => {
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      
      items={[
        {
          key: '1',
          icon: <MdDashboard />,
          label: <Link href={`/dashboard`}>Dashboard</Link>
        },
        {
          key: '2',
          icon: <FaTasks />,
          label: <Link href={`/task`}>Task</Link>
        },
        {
          key:  '3',
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
  );
};

export default SideBar;