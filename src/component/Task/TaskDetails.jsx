import React from 'react';
import { Button, Divider, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TaskDetails = () => {
  // Mock task data
  const task = {
    id: 1,
    title: 'Design Task Details Page',
    description: 'Create a design for the Task Details Page using React and Ant Design.',
    deadline: '2024-05-10',
    assignee: 'John Doe',
    status: 'In Progress',
  };

  return (
    <div className="mx-auto max-w-3xl mt-8">
      <h1 className="text-2xl font-semibold mb-4">Task Details</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <Divider />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">
              <strong>Deadline:</strong> {task.deadline}
            </p>
            <p className="text-gray-600">
              <strong>Assignee:</strong> {task.assignee}
            </p>
            <Tag color={task.status === 'In Progress' ? 'blue' : task.status === 'Completed' ? 'green' : 'red'}>
              {task.status}
            </Tag>
          </div>
          <div>
            <Button type="primary" icon={<EditOutlined />} className="mr-2">
              Edit
            </Button>
            <Button type="danger" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
