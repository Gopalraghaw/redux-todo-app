import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constants/todo.constant"

export const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
export const editTodoAction = (index,data) => {
    return {
        type: EDIT_TODO,
        payload: {
            index,
            data
        }
    }
}
export const updateTodoAction = (index,data) => {
    return {
        type: UPDATE_TODO,
        payload: {
            index,
            data
        }
    }
}
export const deleteTodoAction = (todo) => {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}