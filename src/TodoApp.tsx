import { memo, useState, useRef, KeyboardEvent, lazy, Suspense, useContext } from 'react';
import { TodoContext } from "./TodoContext";
import './App.css'

const TodoList = lazy(() => import("./TodoList"));

function TodoApp() {
  const { addTodo, setFilter, setSearch, search } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

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
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search todos"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedTodoList />
        </Suspense>
      </div>
    </>
  );
}

const MemoizedTodoList = memo(TodoList);

export default TodoApp
