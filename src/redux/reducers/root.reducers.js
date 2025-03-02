import { combineReducers } from "redux";
import countReducer from "./Countr.reducer";
import todoReducer from "./todo.reducer";


const rootReducer = combineReducers({
    counter: countReducer,
    todo:todoReducer
})
export default rootReducer;

