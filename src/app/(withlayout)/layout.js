import DashboardLayout from '@/component/commont/DashboardLayout';
import React from 'react';

const layout = ({ children }) => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};

export default layout;