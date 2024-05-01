"use client";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

const TaskList = ({ tasks, onDragStart, onDragEnd }) => {
  const handleStatusChange = (taskId, newStatus) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      return { tasks: updatedTasks };
    });
  };

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="task-lists">
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-list"
            >
              <h2>To Do</h2>
              {tasks && tasks?.map((task) => (
                task.status === 'todo' ? (
                  <Draggable key={task.id} draggableId={task.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task"
                      >
                        <div className="task-info">
                          <h3>{task.title}</h3>
                          <p>{task.description}</p>
                        </div>
                        <div className="task-actions">
                          <select
                            defaultValue={task.status}
                            onChange={(e) => handleStatusChange(task.id, e.target.value)}
                          >
                            <option value="todo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="done">Done</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ) : null
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* Similar Droppable components for "inProgress" and "done" */}
      </div>
    </DragDropContext>
  );
};
 export default TaskList;