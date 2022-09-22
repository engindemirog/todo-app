import { combineReducers } from "redux";
import dailyTodoReducer from "../reducers/dailyTodoReducer";

const todoRootReducer = combineReducers({
    todos:dailyTodoReducer
})

export default todoRootReducer;