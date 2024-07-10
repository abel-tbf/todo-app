import axios from "axios";
import { ITodo } from "./TodoList";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {fetchTodosSuccess} from "./store";

export const fetchTodos = () => {
  return async (dispatch:Dispatch<PayloadAction<ITodo[]>> ) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
};
