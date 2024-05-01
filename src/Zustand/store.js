// Zustand store
import create from 'zustand';

const useStore = create(set => ({
  tasks: [
    {
      id: 1,
      title: "Task 1",
      status: "To Do"
    },
    {
      id: 2,
      title: "Task 2",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Task 3",
      status: "Done"
    }
  ],
  updateTaskStatus: (taskId, newStatus) => set(state => ({
    tasks: state.tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task)
  })),
  reorderTasks: (sourceIndex, destinationIndex) => set(state => {
    const tasks = [...state.tasks];
    const [removed] = tasks.splice(sourceIndex, 1);
    tasks.splice(destinationIndex, 0, removed);
    return { tasks };
  })
}));

export { useStore };
