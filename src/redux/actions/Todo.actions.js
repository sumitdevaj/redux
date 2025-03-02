import { ADD_TODO, DELETE_TODO } from "../constants/todo.constants";

export const addTodo = (todo)=>({type: ADD_TODO,payload:todo});
export const deleteTodo = (idx)=>({type: DELETE_TODO,payload:idx})