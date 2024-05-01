import { Card } from 'antd';
import React from 'react';

const TaskBoardCard = ({ title, data }) => {
  return (
    <Card
    title="Task Complete"
    bordered={false}
    style={{
      width: 300,
   
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}
  >
    <p>{data}</p>
   
  </Card>
  );
};

export default TaskBoardCard;