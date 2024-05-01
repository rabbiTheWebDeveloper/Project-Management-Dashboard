import { Button, DatePicker, Form, Input } from 'antd';


const TaskFrom = () => {
  const [form] = Form.useForm();
  return (
    <Form
    form={form}
    layout="vertical"
    // onFinish={onFinish}
  >
    <Form.Item
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input the title!' }]}
    >
      <Input placeholder="Enter title" />
    </Form.Item>
    <Form.Item
      label="Description"
      name="description"
    >
      <Input.TextArea placeholder="Enter description" />
    </Form.Item>
    <Form.Item
      label="Deadline"
      name="deadline"
      rules={[{ required: true, message: 'Please select the deadline!' }]}
    >
      <DatePicker placeholder="Select deadline" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit"
      //  loading={loading}
       >
        Add Task
      </Button>
    </Form.Item>
  </Form>
  );
};

export default TaskFrom;