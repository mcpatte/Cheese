import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {render} from 'react-dom';
import { fetchTasks } from '../actions'

import Tasks from '../components/Tasks.js';
<<<<<<< 2e467290aea53b00165da3c03007ba32b0b80d7e
import Navbar from '../components/Navbar.js';
=======
import Nav from '../components/Navbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
//socketio stuff
>>>>>>> Feat-Nav_Bar_Renders


class App extends Component {
  constructor(props) {
    super(props)
    this.requestTasks = this.requestTasks.bind(this)

  }

  componentDidMount() {
    const { dispatch, selectedTask } = this.props
    console.log('component did mount fired')
    dispatch(fetchTasks(selectedTask))

  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, selectedTask } = nextProps
    console.log('compont will receive props fired')
    dispatch(fetchTasks())

  }

  requestTasks() {
    const { dispatch, selectedTask } = this.props
    dispatch(fetchTasks())
    console.log('requestTask fired')
  }

  addTask() {

  }

  modifyTask() {

  }


  render() {



    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <Nav />
            <Tasks task={task} />
          </div>
        </MuiThemeProvider>
      )
  }


}


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



// App.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   tasks: PropTypes.array.isRequired
// }

function mapStateToProps(state) {
  const { } = state
  const {
    isFetching,
    lastUpdated,
    data: tasks
  } = {isFetching: true, data: []}

  return {
    tasks,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)