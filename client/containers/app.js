import React from 'react';
import {render} from 'react-dom';
import Tasks from '../components/Tasks.js';

const task = {
  title: 'Set up front-end',
  status: 'In Progress',
  dueDate: '10/10/10',
  category: 'Front-End',
  points: 20,
  notes: 'create webpack config file',
  owner: 'Heather',
  creator: 'Someone else',
  comments: [
    {
      user: 'Joe',
      comment: 'Cool'
    },
    {
      user: 'Joe',
      comment: 'Cool'
    }
  ]
}


render(<Tasks task={task} />, document.getElementById('app'));
