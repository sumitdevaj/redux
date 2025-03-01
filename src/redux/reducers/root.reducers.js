import { combineReducers } from "redux";
import countReducer from "./Countr.reducer";


const rootReducer = combineReducers({
    counter: countReducer
})
export default rootReducer;

