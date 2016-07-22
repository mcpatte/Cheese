
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const POST_TASK = 'POST_TASK'

export function requestTasks(userID) {
  return {
    type: REQUEST_TASKS,
    userID
  }
}

export function receivePosts(data) {
  return {
    type: RECEIVE_POSTS,
    data
  }
}

export function postTask() {
  return {
    type: POST_TASK
  }
}


function fetchTasks() {
  return dispatch => {
    dispatch(requestTasks())
    return fetch('/tasks')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}