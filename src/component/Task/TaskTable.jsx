import React from 'react';
import TaskCard from './TaskCard';
const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description of Task 1',
    deadline: '2024-05-05',
    members: ['John', 'Jane'],
    status: 'todo',
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description of Task 2',
    deadline: '2024-05-10',
    members: ['Alice', 'Bob'],
    status: 'inProgress',
  },
  // Add more tasks as needed
];

const TaskTable = () => {
  return (
    <div className="mt-10 overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="rounded-xl  shadow-md">
          <th className="text-lg font-medium text-custom-text-color1 p-5 ">
          Title
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5 ">
          Description
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5">
          Deadline
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5">
          Members
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5">
          Status
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="">
        {
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        }
       {/* <TaskCard/> */}
      </tbody>
    </table>
  </div>
  );
};

export default TaskTable;