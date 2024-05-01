import React from "react";
import TaskAction from "./ProjectAction";
import ProjectAction from "./ProjectAction";


const ProjectCard = ({ project , index }) => {
  return (
    <tr className="rounded-xl shadow-md text-center">
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {index + 1}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {project?.name}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {project?.description}
      </td>
      <ProjectAction projectId={project.id} />
    </tr>
  );
};

export default ProjectCard;
