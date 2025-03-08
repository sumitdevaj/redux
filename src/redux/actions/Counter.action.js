import { DECREMENT, INCREMENT, RESET } from "../constants/Counter.constants";

export const increment = ()=>({type:INCREMENT});
export const decrement = ()=>({type:DECREMENT});
export const reset = ()=>({type:RESET});
