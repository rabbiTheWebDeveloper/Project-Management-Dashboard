import React from 'react';
import TaskCard from './ProjectCard';
import ProjectCard from './ProjectCard';
import { projects } from '@/data';
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

const ProjectTable = () => {
  return (
    <div className="mt-10 overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="rounded-xl  shadow-md">
          <th className="text-lg font-medium text-custom-text-color1 p-5 ">
          SL
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5 ">
          Project Name
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5 ">
          Project Description
          </th>
          <th className="text-lg font-medium text-custom-text-color1 p-5">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="">
        {
          projects.map((project , index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
        }
       {/* <TaskCard/> */}
      </tbody>
    </table>
  </div>
  );
};

export default ProjectTable;