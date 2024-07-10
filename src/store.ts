import { ITodo } from "./TodoList";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"

export interface ITodoState {
  todos: ITodo[];
  filter: string;
  search: string;
}

const initialState: ITodoState = {
  todos: [],
  filter: "all",
  search: ""
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: ITodoState, action: PayloadAction<string>) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      });
    },
    deleteTodo: (state: ITodoState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state: ITodoState, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state: ITodoState, action: PayloadAction<{id: number, title: string}>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    setFilter: (state: ITodoState, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setSearch: (state: ITodoState, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    fetchTodosSuccess: (state: ITodoState, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
  }
});

export const {
  addTodo,
  deleteTodo,
  toggleComplete,
  updateTodo,
  setFilter,
  setSearch,
  fetchTodosSuccess,
} = todosSlice.actions;

const store = configureStore({
  reducer: todosSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
