const taskFilters = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_TASK_FILTER':
      return action.filter
    default:
      return state
  }
}

export default taskFilters