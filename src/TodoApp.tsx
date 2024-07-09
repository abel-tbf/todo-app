import { memo, useCallback, useState, useEffect, useRef, KeyboardEvent, lazy, Suspense } from 'react';
import { ITodo } from "./TodoList";
import './App.css'

const TodoList = lazy(() => import("./TodoList"));

function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
      inputRef.current?.focus();
    }
  };

  const deleteTodo = useCallback((id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, [todos]);

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id) ? {...todo, completed: !todo.completed} : todo));
  };

  const updateTodo = useCallback((id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id )? {...todo, text: newText} : todo));
  }, [todos]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
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

  if (!todos) {
    return <div>Loading...</div>
  } else {
    console.log("Todos ", todos);
  }

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
        <button onClick={addTodo}>Add</button>
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
          <MemoizedTodoList
            todos={filteredTodos}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
            onUpdate={updateTodo}
          />
        </Suspense>
      </div>
    </>
  );
}

const MemoizedTodoList = memo(TodoList);

export default TodoApp
