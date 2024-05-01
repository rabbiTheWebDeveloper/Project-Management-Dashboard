'use client'
import { Select } from 'antd';
import React from 'react';

const CustomSelect = ({ status }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
    defaultValue={status}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      { value: 'todo', label: 'To Do' },
      { value: 'inProgress', label: 'In Progress' },
      { value: 'done', label: 'Done' },
    ]}
  />
  );
};

export default CustomSelect;