import { Wrapper } from './style';

import { SubmitHandler, useForm } from 'react-hook-form';

import useDevelopers from 'services/hooks/useDevelopers';
import useTasks from 'services/hooks/useTasks';

import { Task, TaskUpdateInput } from 'utils/Types';

type TaskUpdateModalProps = {
  task: Task;
  onClose: () => void;
};

const TaskUpdateModal: React.FC<TaskUpdateModalProps> = ({ task, onClose }) => {
  const { register, handleSubmit } = useForm<TaskUpdateInput>();
  const { updateTask } = useTasks();
  const { developers } = useDevelopers();

  const onSubmit: SubmitHandler<TaskUpdateInput> = async (data) => {
    if (
      task.status === 'In Progress' &&
      (!data.developerId || data.developerId !== task.developerId)
    ) {
      data.status = 'Todo';
    }
    await updateTask(task.id, data);
    onClose();
  };

  return (
    <Wrapper>
      <div className="modal">
        <div className="modal-content">
          <h2>Update Task</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Status:
              <select {...register('status')} defaultValue={task.status}>
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Expired">Expired</option>
                <option value="Archived">Archived</option>
              </select>
            </label>
            <label>
              Developers:
              <select {...register('developerId')} defaultValue={task.developerId || ''}>
                <option value="">Unassigned</option>
                {developers.map((dev) => (
                  <option key={dev.id} value={dev.id}>
                    {dev.username}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default TaskUpdateModal;
