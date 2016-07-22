import React from 'react';
import TaskStatusColumn from './TaskStatusColumn';

const tasks = [
  {
    title: 'To Do',
    status: 'To Do',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  },

  {
    title: 'To Do',
    status: 'To Do',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  },

  {
    title: 'In Progress',
    status: 'In Progress',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  },

  {
    title: 'In Progress',
    status: 'In Progress',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  },

  {
    title: 'Completed',
    status: 'Completed',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  },

  {
    title: 'Completed',
    status: 'Completed',
    dueDate: '10/10/10',
    category: 'Front-End',
    points: 20,
    notes: 'create webpack config file',
    owner: 'Heather',
    creator: 'Someone else',
    comments: [
      {
        user: 'Commenter1',
        comment: 'Cool'
      },
      {
        user: 'Commenter2',
        comment: 'Cool'
      }
    ]
  }
];

var filteredTasks = function(tasks) {
  return tasks.reduce(function(a, b) {
    if (b.status === "To Do") {
      a.todos ? a.todos.push(b) : a.todos = [b];
      return a
    } else if (b.status === "In Progress") {
      a.inProgress ? a.inProgress.push(b) : a.inProgress = [b];
      return a
    } else {
      a.completed ? a.completed.push(b) : a.completed = [b];
      return a
    }
  }, {});
};

class Tasks extends React.Component {
  render() {
    return (
      <div className="task-container">
        <TaskStatusColumn task={this.props.task} />
        <TaskStatusColumn task={this.props.task} />
        <TaskStatusColumn task={this.props.task} />
      </div>
    );
  }
}

export default Tasks;