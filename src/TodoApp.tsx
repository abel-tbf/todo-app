import { memo, useState, useRef, KeyboardEvent, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, SET_FILTER, SET_SEARCH, ITodoState } from "./store";
import './App.css'

const TodoList = lazy(() => import("./TodoList"));

function TodoApp() {
  const todos = useSelector((state: ITodoState) => state.todos);
  const filter = useSelector((state: ITodoState) => state.filter);
  const search = useSelector((state: ITodoState) => state.search);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({type: ADD_TODO, payload: newTodo});
      setNewTodo("");
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
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
    return todo.text.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="App">
        <h1>Todo App</h1>
        <input
          ref={inputRef}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
        <div>
          <button onClick={() => dispatch({type: SET_FILTER, payload: "all"})}>All</button>
          <button onClick={() => dispatch({type: SET_FILTER, payload: "active"})}>Active</button>
          <button onClick={() => dispatch({type: SET_FILTER, payload: "completed"})}>Completed</button>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch({type: SET_SEARCH, payload: e.target.value})}
          placeholder="Search todos"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedTodoList todos={filteredTodos} />
        </Suspense>
      </div>
    </>
  );
}

const MemoizedTodoList = memo(TodoList);

export default TodoApp
