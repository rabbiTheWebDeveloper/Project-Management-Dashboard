const useTaskStore = (set) => {
  let draggingTaskId = null; // Track the currently dragged task

  const onDragStart = (taskId) => {
    draggingTaskId = taskId;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    set((state) => {
      const draggedTask = state.tasks.find((task) => task.id === draggingTaskId);
      const updatedTasks = state.tasks.filter((task) => task.id !== draggingTaskId);
      updatedTasks.splice(destination.index, 0, draggedTask);
      draggingTaskId = null; // Reset after drop
      return { tasks: updatedTasks };
    });
  };

  return { tasks, onDragStart, onDragEnd };
};
