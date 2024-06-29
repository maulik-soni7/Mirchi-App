import React from 'react';

import { Developer } from 'utils/Types';

import { Wrapper } from './StyleDeveloperItem';

type DeveloperItemProps = {
  developer: Developer;
  taskCount: number;
};

const DeveloperItem: React.FC<DeveloperItemProps> = ({ developer, taskCount }) => {
  return (
    <Wrapper>
      <div className="developer-item">
        <p>{developer.username}</p>
        <p>Tasks: {taskCount}</p>
      </div>
    </Wrapper>
  );
};

export default DeveloperItem;
