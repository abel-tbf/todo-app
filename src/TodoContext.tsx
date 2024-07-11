import React, {createContext, useState, useEffect } from 'react';
import { ITodo } from "./TodoList";

interface IProps {
  children: React.ReactNode
}

interface IContext {
  addTodo: (newTodo: string) => void;
  setFilter: (filter: string) => void;
  setSearch: (search: string) => void;
  search: string;
  filter: string;
  todos: ITodo[];
  filteredTodos: ITodo[];
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
}

const TodoContext = createContext({} as IContext);

const TodoProvider: React.FC<IProps>  = ({children}) => {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id) ? {...todo, completed: !todo.completed} : todo));
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id )? {...todo, title: newText} : todo));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    } else {
      return true;
    }
  }).filter(todo => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <TodoContext.Provider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo, filter, setFilter, search, setSearch, filteredTodos}}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
