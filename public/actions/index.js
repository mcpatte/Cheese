
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_TASK = 'POST_TASK'

export function requestTasks(userID) {
  return dispatch => {
    dispatch(requestTasks())
    return fetch('/tasks')
      .then(response => response.json())
      .then(json => dispatch(receiveTasks(json)))
  }
}

export function receiveTasks(json) {
  return {
    type: RECEIVE_POSTS,
    data: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function postTask() {
  return {
    type: POST_TASK
  }
}




//requestTasks



//receiveTasks
//postTask