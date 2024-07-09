import { ITodo } from "./TodoList";
import { createStore } from "redux";

export interface ITodoState {
  todos: ITodo[];
  filter: string;
  search: string;
}

const initialState = {
  todos: [],
  filter: "all",
  search: ""
};

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";
export const SET_SEARCH = "SET_SEARCH";

export type ADD_TODO = typeof ADD_TODO;
export type DELETE_TODO = typeof DELETE_TODO;
export type TOGGLE_COMPLETE = typeof TOGGLE_COMPLETE;
export type UPDATE_TODO = typeof UPDATE_TODO;
export type SET_FILTER = typeof SET_FILTER;
export type SET_SEARCH = typeof SET_SEARCH;

export interface AddTodoAction {
  type: ADD_TODO;
  payload: string;
}

export interface DeleteTodoAction {
  type: DELETE_TODO;
  payload: number;
}

export interface ToggleCompleteAction {
  type: TOGGLE_COMPLETE;
  payload: number;
}

export interface UpdateTodoAction {
  type: UPDATE_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export interface SetFilterAction {
  type: SET_FILTER;
  payload: string;
}

export interface SetSearchAction {
  type:SET_SEARCH;
  payload: string;
}

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleCompleteAction | UpdateTodoAction | SetFilterAction | SetSearchAction;

const reducer = (state: ITodoState = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {id: Date.now(), text: action.payload, completed: false}]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo)
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
