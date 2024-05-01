"use client";
import { Button } from "antd";
import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useQuery, useMutation, queryCache, useQueryClient } from '@tanstack/react-query';
const deleteProject = async (projectId) => {

  const response = await axios.delete(`http://localhost:3000/projects/${projectId}`);
  return response.data;
};

const ProjectDelete = ({projectId}) => {
  const queryClient = useQueryClient();
  // const { isLoading, error, data } = useQuery("projects", fetchProjects);
  const deleteMutation = useMutation( {
    mutationFn: deleteProject,
    onSuccess: (data, variables, context) => {
      console.log(context);
      queryClient.invalidateQueries(["projects"]);
  },
  });

  const handleDelete = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteMutation.mutate(projectId);
    }
  };
  return (
    <Button onClick={() => handleDelete(projectId)} className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
      <MdDelete />
    </Button>
  );
};

export default ProjectDelete;
