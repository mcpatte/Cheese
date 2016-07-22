import { combineReducers } from 'redux'
import tasks from './tasks'
import taskFilters from './taskFilters'

const taskApp = combineReducers({
  tasks,
  taskFilters
})

export default taskApp
