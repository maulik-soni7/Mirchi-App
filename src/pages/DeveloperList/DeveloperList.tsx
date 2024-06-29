import React, { useEffect } from 'react';

import useDevelopers from 'services/hooks/useDevelopers';
import useTasks from 'services/hooks/useTasks';

import DeveloperItem from './DeveloperItem';
import { Wrapper } from './StyleDeveloperList';

const DeveloperList: React.FC = () => {
  const { developers, fetchDevelopers } = useDevelopers();
  const { tasks, fetchTasks } = useTasks();

  useEffect(() => {
    fetchDevelopers();
    fetchTasks();
  }, [fetchDevelopers, fetchTasks]);

  const getTaskCount = (developerId: number | string) => {
    return tasks.filter(
      (task) =>
        (task.status === 'Todo' || task.status === 'In Progress') &&
        task.developerId === developerId
    ).length;
  };

  return (
    <Wrapper>
      <div className="developer-list">
        <h2>Developers</h2>
        {developers.map((dev) => (
          <DeveloperItem key={dev.id} developer={dev} taskCount={getTaskCount(dev.id)} />
        ))}
      </div>
    </Wrapper>
  );
};

export default DeveloperList;
