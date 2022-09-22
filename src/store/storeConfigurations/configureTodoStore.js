import todoRootReducer from "../rootReducers/todoRootReducer";
import {createStore} from "redux"
import { devToolsEnhancer } from "redux-devtools-extension";

export function configureTodoStore() {
    return createStore(todoRootReducer,devToolsEnhancer())
}