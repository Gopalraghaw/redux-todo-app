import { createStore } from "redux";
import { TodoReducer } from "../reducer/todo.reducer";

export let store = createStore(TodoReducer)