import produce from "immer";
import { ADD_DAILY_TODO, REMOVE_DAILY_TODO } from "../actions/todoActions";

let initialState = {
  todos: [],
  
};

export default function dailyTodoReducer(
  state = initialState,
  { type, payload }
) {
  return produce(state, (draft) => {
    switch (type) {
      case ADD_DAILY_TODO:
        draft.todos.push(payload);
        break;
      case REMOVE_DAILY_TODO:
        draft.todos = draft.todos.filter((t) => t.id !== payload.id);
        break;
      default:
    }
  });
}
