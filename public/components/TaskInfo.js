import React from 'react';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';

const TaskInfo = ({ title, status, dueDate, category, points }) => {
  return (
    <div>
      <div className="date-status-container">
        <p className="due-date">Due: {dueDate}</p>
        <p className="status">{status}</p>
      </div>
      <p className="task-title">Set up front end</p>
      <div className="cat-pts-container">
        <p className="category">{category}</p>
        <p>&#9679;</p>
        <p className="points">{points} points</p>
      </div>
    </div>
  );
};

export default TaskInfo;