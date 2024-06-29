import axios from 'axios';

import { Task, TaskUpdateInput } from 'utils/Types';

const API_URL = 'http://localhost:3001/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks', error);
    throw error;
  }
};

export const addTask = async (title: string): Promise<void> => {
  try {
    await axios.post(API_URL, {
      title,
      status: 'Todo',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const updateTask = async (id: number, updates: TaskUpdateInput): Promise<void> => {
  try {
    await axios.patch(`${API_URL}/${id}`, {
      ...updates,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};
