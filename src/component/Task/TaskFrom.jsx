import { Button, DatePicker, Form, Input } from 'antd';
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const createTask = async (task) => {

  const response = await axios.post(`http://localhost:3000/tasks` , task);
  return response.data;
};
const TaskFrom = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const createMutation = useMutation( {
    mutationFn: createTask,
    onSuccess: (data, variables, context) => {
      console.log(context);
      queryClient.invalidateQueries(["tasks"]);;
  },
  })
  const onFinish = async (values) => {
    values.status='todo'
    values.deadline = values.deadline.format('YYYY-MM-DD')
    values.members = values.members.split(',').map((member) => member.trim());
    values.id = crypto.randomUUID().toString()
    createMutation.mutate(values)
    
    // setLoading(true);
    // Simulate server-side processing (replace this with your actual server logic)
    setTimeout(() => {
      console.log('Received values:', values);
      // setLoading(false);
      form.resetFields();
    }, 1000);
  };
  return (
    <Form
    form={form}
    layout="vertical"
    onFinish={onFinish}
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
    <Form.Item
      label="Members"
      name="members"
      rules={[{ required: true, message: 'Please input the members!' }]}
    >
      <Input placeholder="Enter title" />
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