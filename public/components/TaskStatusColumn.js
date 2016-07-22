import React from 'react';
import TaskCard from './TaskCard';

const TaskStatusColumn = ({tasks}) => {
  return (
    <div className="task-column">
      {tasks.map((task, index) =>
        <TaskCard task={task} key={index} />
      )}
    </div>
  );
};

export default TaskStatusColumn;