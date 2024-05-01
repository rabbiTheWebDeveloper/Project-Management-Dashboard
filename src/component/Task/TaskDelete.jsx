"use client";
import { Button } from "antd";
import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useQuery, useMutation, queryCache, useQueryClient } from '@tanstack/react-query';
const deleteTask = async (taskId) => {
  const response = await axios.delete(`http://localhost:3000/tasks/${taskId}`);
  return response.data;
};

const TaskDelete = ({taskId}) => {
  const queryClient = useQueryClient();
  // const { isLoading, error, data } = useQuery("projects", fetchProjects);
  const deleteMutation = useMutation( {
    mutationFn: deleteTask,
    onSuccess: (data, variables, context) => {
      console.log(context);
      queryClient.invalidateQueries(["tasks"]);
  },
  });

  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure you want to delete this Task?")) {
      deleteMutation.mutate(taskId);
    }
  };
  return (
    <Button onClick={() => handleDelete(taskId)} className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
      <MdDelete />
    </Button>
  );
};

export default TaskDelete;
