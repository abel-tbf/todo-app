import { useState, useContext } from 'react';
import { TodoContext } from "./TodoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const { filteredTodos, deleteTodo, toggleComplete, updateTodo } = useContext(TodoContext);
  const [editingId, setEditingId] = useState<number|null>(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };
  
  const saveEdit = (id: number) => {
    updateTodo(id, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <h2>My Todos</h2>
      {filteredTodos.length === 0 ? (
        <p>No todos left. Add some tasks!</p>
      ) : (
        <TransitionGroup component="ul">
          {filteredTodos.map((todo: ITodo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="fade">
            <li key={todo.id} className={todo.completed ? "completed" : ""} >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyPress={(e) => {if (e.key === "Enter") saveEdit(todo.id)} }
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button
                  className="complete"
                  onClick={() => toggleComplete(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => startEditing(todo.id, todo.text)}>
                  Edit
                </button>
              </>
            )}
            </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
}

export default TodoList;
