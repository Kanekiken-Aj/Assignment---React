
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(),
    text,
    completed: false,
  },
});

export const updateTodo = (id) => ({
  type: UPDATE_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
