import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
import {render} from 'react-dom';
//actions
//components
import Tasks from '../components/Tasks.js';


// class App extends Component {
//   constructor(props) {
//     super(props)

//   }

//   componentDidMount() {
//     const { dispatch } = this.props
//     dispatch(/*get cards action*/)
//   }

//   componentWillReceiveProps(nextProps) {


//   }

//   render() {


//   }


// }


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


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  tasks: PropTypes.array.isRequired
}

// function mapStateToProps(state) {
//   const { } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: cards
//   }
// }


export default connect(mapStateToProps)(App)

render(<Tasks task={task} />, document.getElementById('app'));