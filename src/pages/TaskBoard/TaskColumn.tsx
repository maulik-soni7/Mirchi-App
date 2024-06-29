import { Task } from 'utils/Types';

import { Wrapper } from './StyleTaskColumn';
import TaskCard from './TaskCard';

type TaskColumnProps = {
  title: string;
  tasks: Task[];
};

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <Wrapper>
      <div className="task-column">
        <h2>{title}</h2>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </Wrapper>
  );
};

export default TaskColumn;
