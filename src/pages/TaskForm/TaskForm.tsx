import { Wrapper } from './style';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useTasks from 'services/hooks/useTasks';

import { TaskFormInput } from 'utils/Types';

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TaskFormInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TaskFormInput> = async (data) => {
    await addTask(data.title);
    toast.success('Task added successfully!', {
      onClose: () => navigate('/task-board')
    });
  };

  return (
    <div>
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create New Task</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Task Title"
              {...register('title', {
                required: 'Task title is required',
                maxLength: {
                  value: 30,
                  message: 'Task title cannot exceed 30 characters'
                }
              })}
            />
            {errors.title && <p className="error">{errors.title.message}</p>}
          </div>
          <button type="submit">Add Task</button>
        </form>
        <ToastContainer />
      </Wrapper>
    </div>
  );
};

export default TaskForm;
