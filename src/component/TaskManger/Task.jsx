// Task.js
"use client"
import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Deadline: {task.dueDate}</p>
      <p>Assigned to: {task.assignee}</p>
      {/* Add options to edit or mark as completed */}
    </div>
  );
};

export default Task;
