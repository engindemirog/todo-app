export const ADD_DAILY_TODO = "ADD_DAILY_TODO"
export const REMOVE_DAILY_TODO = "REMOVE_DAILY_TODO"

export function addDailyTodo(todo){
    return {
        type: "ADD_DAILY_TODO",
        payload : todo
    }
}

export function removeDailyTodo(todo){
    return {
        type: "REMOVE_DAILY_TODO",
        payload : todo
    }
}