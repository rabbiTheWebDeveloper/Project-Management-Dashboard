import React from 'react';
import TaskCard from './ProjectCard';
import ProjectCard from './ProjectCard';

import {useQuery} from '@tanstack/react-query'
import axios from 'axios';

const retrieveProducts = async({queryKey}) => {
  const response = await axios.get(`http://localhost:3000/projects`);
  return response.data;
}
const ProjectTable = () => {

  const {data: projects, error, isLoading} = useQuery({
    queryKey: ["projects",],
    queryFn: retrieveProducts,
  });

  if(isLoading) return <div>Fetching Project...</div>
  if(error) return <div>An error occured: {error.message}</div>
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
         projects && projects.map((project , index) => (
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