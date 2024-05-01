// TaskManagement.js
"use client"
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import { useStore } from '@/Zustand/store';

const TaskManagement = () => {
  const { tasks, moveTask } = useStore();

  const onDragEnd = result => {
    // Reorder logic
    if (!result.destination) return;
    moveTask(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <TaskList tasks={tasks} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskManagement;
