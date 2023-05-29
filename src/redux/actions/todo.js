import { ADD_TODO, DELETE_TODO } from "./action-type";

//Add todo action
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

//Delete todo
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

//Update todo
export const UPDATE_TODO = (id, todo) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id },
});
