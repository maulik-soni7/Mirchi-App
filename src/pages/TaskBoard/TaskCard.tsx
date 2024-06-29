import { useState } from 'react';

import { Task } from 'utils/Types';

import TaskUpdateModal from '../TaskUpdate/TaskUpdateModal';
import { Wrapper } from './StyleTaskCard';

type TaskCardProps = {
  task: Task;
};

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { title, createdAt, updatedAt, developerId, status } = task;
  const developerName = developerId ? `Developer ${developerId}` : 'Unassigned';

  return (
    <>
      <Wrapper>
        <div className="task-card">
          <h4>{title}</h4>
          <p>Status: {status}</p>
          <p>Assigned to: {developerName}</p>
          <p>Created at: {new Date(createdAt).toLocaleString()}</p>
          <p>Updated at: {new Date(updatedAt).toLocaleString()}</p>
          <button onClick={handleOpenModal}>Update</button>
        </div>
        {isModalOpen && <TaskUpdateModal task={task} onClose={handleCloseModal} />}
      </Wrapper>
    </>
  );
};

export default TaskCard;
