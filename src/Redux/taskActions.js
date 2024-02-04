export const ADD_TASK = 'ADD_TASK';

export const addTask = (note) => ({
  type: ADD_TASK,
  payload: note,
});
