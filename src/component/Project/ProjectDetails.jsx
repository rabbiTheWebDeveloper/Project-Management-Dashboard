"use client";
import React, { useState } from 'react';
import { Card, Typography, Button, Divider, List, Modal, Form, Input, Select } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;


const ProjectDetails = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showAssignMemberModal, setShowAssignMemberModal] = useState(false);

  const handleAddTask = values => {
    console.log('Adding task:', values);
    // Add task logic
    setShowAddTaskModal(false);
  };

  const handleAssignMember = values => {
    console.log('Assigning member:', values);
    // Assign member logic
    setShowAssignMemberModal(false);
  };

  const project = 
{
  "id": 1,
  "name": "Project A",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "tasks": [
    {
      "id": 1,
      "title": "Task 1",
      "description": "Task 1 description...",
      "status": "To Do",
      "dueDate": "2024-05-10",
      "assignee": "John Doe"
    },
    {
      "id": 2,
      "title": "Task 2",
      "description": "Task 2 description...",
      "status": "In Progress",
      "dueDate": "2024-05-15",
      "assignee": "Jane Smith"
    },
    {
      "id": 3,
      "title": "Task 3",
      "description": "Task 3 description...",
      "status": "Done",
      "dueDate": "2024-05-20",
      "assignee": "John Doe"
    }
  ],
  "teamMembers": [
    {
      "id": 1,
      "name": "John Doe",
      "role": "Developer"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "role": "Designer"
    },
    {
      "id": 3,
      "name": "Alex Johnson",
      "role": "Project Manager"
    }
  ],
  "recentActivities": [
    {
      "id": 1,
      "timestamp": "2024-04-28T10:30:00",
      "description": "Task 1 was completed by John Doe."
    },
    {
      "id": 2,
      "timestamp": "2024-04-29T14:45:00",
      "description": "Task 2 was moved to In Progress by Jane Smith."
    }
  ]
}

  return (
    <div className="p-4">
      <Card className="mb-4" title={<Title level={3}>{project?.name}</Title>}>
        <Text type="secondary">{project?.description}</Text>
      </Card>
      <Card className="mb-4" title={<Title level={4}>Tasks</Title>}>
        <Button type="primary" onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
        <List
          dataSource={project?.tasks}
          renderItem={task => (
            <List.Item>
              <Text>{task.title}</Text>
            </List.Item>
          )}
        />
      </Card>
      <Card className="mb-4" title={<Title level={4}>Team Members</Title>}>
        <Button type="primary" onClick={() => setShowAssignMemberModal(true)}>Assign Member</Button>
        <List
          dataSource={project.teamMembers}
          renderItem={member => (
            <List.Item>
              <Text>{member.name}</Text>
            </List.Item>
          )}
        />
      </Card>
      <Card className="mb-4" title={<Title level={4}>Recent Activities</Title>}>
        <List
          dataSource={project.recentActivities}
          renderItem={activity => (
            <List.Item>
              <Text>{activity.description}</Text>
            </List.Item>
          )}
        />
      </Card>

      {/* Add Task Modal */}
      <Modal
        title="Add Task"
        visible={showAddTaskModal}
        onCancel={() => setShowAddTaskModal(false)}
        footer={null}
      >
        <Form onFinish={handleAddTask}>
          <Form.Item name="title" label="Task Title" rules={[{ required: true, message: 'Please enter task title' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Button type="primary" htmlType="submit">Add Task</Button>
        </Form>
      </Modal>

      {/* Assign Member Modal */}
      <Modal
        title="Assign Member"
        visible={showAssignMemberModal}
        onCancel={() => setShowAssignMemberModal(false)}
        footer={null}
      >
        <Form onFinish={handleAssignMember}>
          <Form.Item name="member" label="Select Member" rules={[{ required: true, message: 'Please select a member' }]}>
            <Select>
              {project.teamMembers.map(member => (
                <Option key={member.id} value={member.id}>{member.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">Assign Member</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
