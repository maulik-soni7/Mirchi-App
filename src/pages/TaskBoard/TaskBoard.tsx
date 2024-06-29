import React, { useEffect, useState } from 'react';

import useDevelopers from 'services/hooks/useDevelopers';
import useTasks from 'services/hooks/useTasks';

import { Wrapper } from './StyleTaskBoard';
import TaskColumn from './TaskColumn';

const TaskBoard: React.FC = () => {
  const { tasks, fetchTasks } = useTasks();
  const { developers, fetchDevelopers } = useDevelopers();
  const [selectedDeveloper, setSelectedDeveloper] = useState<number | null>(null);

  useEffect(() => {
    fetchTasks();
    fetchDevelopers();
  }, [fetchTasks, fetchDevelopers]);

  const handleDeveloperFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedDeveloper(value ? parseInt(value) : null);
  };

  const filteredTasks = selectedDeveloper
    ? tasks.filter((task) => task.developerId === selectedDeveloper)
    : tasks;

  const columns = ['Todo', 'In Progress', 'Completed', 'Expired', 'Archived'];

  return (
    <Wrapper>
      <div className="task-board">
        <div className="filter">
          <label htmlFor="developer-filter">Filter by Developer:</label>
          <select id="developer-filter" onChange={handleDeveloperFilterChange}>
            <option value="">All Developers</option>
            {developers.map((dev) => (
              <option key={dev.id} value={dev.id}>
                {dev.username}
              </option>
            ))}
          </select>
        </div>
        <div className="task-board-wrap">
          {columns.map((status) => (
            <TaskColumn
              key={status}
              title={status}
              tasks={filteredTasks.filter((task) => task.status === status)}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default TaskBoard;
