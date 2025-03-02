import { ADD_TODO } from "../constants/todo.constants";

export const addTodo = (todo)=>({type: ADD_TODO,payload:todo});