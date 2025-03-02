import { ADD_TODO } from "../constants/todo.constants"

const initialState = {
    todos: []
}
const todoReducer = (state =initialState,action) =>{
    switch(action.type){
        case ADD_TODO:
            return {...state ,todos:[...state.todos,action.payload]}
        default:
            return state
    }
}

export default todoReducer;