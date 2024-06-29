import { create } from 'zustand';

import { addTask, fetchTasks, updateTask } from 'services/api/taskService';

import { Task, TaskUpdateInput } from 'utils/Types';

type TaskStore = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string) => Promise<void>;
  updateTask: (id: number, updates: TaskUpdateInput) => Promise<void>;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const tasks = await fetchTasks();
    set({ tasks });
  },
  addTask: async (title: string) => {
    await addTask(title);
    const tasks = await fetchTasks();
    set({ tasks });
  },
  updateTask: async (id: number, updates: TaskUpdateInput) => {
    await updateTask(id, updates);
    const tasks = await fetchTasks();
    set({ tasks });
  }
}));

export default useTaskStore;
