"use client"
import { useStore } from '@/Zustand/store';
import React from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = () => {
  const { tasks, updateTaskStatus, reorderTasks } = useStore();

  const onDragEnd = result => {
    if (!result.destination) return;
    const { source, destination } = result;
    reorderTasks(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div onClick={() => updateTaskStatus(task.id, 'In Progress')}>
                      {task.title} - {task.status}
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
