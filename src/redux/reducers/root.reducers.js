import { combineReducers } from "redux";
import countReducer from "./Countr.reducer";
import todoReducer from "./todo.reducer";
import ProductReducer from "./Product.reducer";


const rootReducer = combineReducers({
    counter: countReducer,
    todo:todoReducer,
    product:ProductReducer
})
export default rootReducer;

