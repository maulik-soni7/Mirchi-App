import { useEffect } from 'react';

import useTaskStore from '../store/taskStore';

const useTasks = () => {
  const { tasks, fetchTasks, addTask, updateTask } = useTaskStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      tasks.forEach((task) => {
        const elapsed = (now - new Date(task.updatedAt).getTime()) / 1000;

        if (task.status === 'In Progress' && elapsed > 120) {
          updateTask(task.id, { status: 'Expired' });
        } else if ((task.status === 'Expired' || task.status === 'Completed') && elapsed > 240) {
          updateTask(task.id, { status: 'Archived' });
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks, updateTask]);

  return {
    tasks,
    fetchTasks,
    addTask,
    updateTask
  };
};

export default useTasks;
