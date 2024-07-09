import { useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface ITodoList {
  todos: ITodo[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

function TodoList({todos, onDelete, onToggleComplete, onUpdate}: ITodoList) {
  const [editingId, setEditingId] = useState<number|null>(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };
  
  const saveEdit = (id: number) => {
    onUpdate(id, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div>
      <h2>My Todos</h2>
      {todos.length === 0 ? (
        <p>No todos left. Add some tasks!</p>
      ) : (
        <TransitionGroup component="ul">
          {todos.map((todo: ITodo) => (
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
                <button onClick={() => onDelete(todo.id)}>Delete</button>
                <button
                  className="complete"
                  onClick={() => onToggleComplete(todo.id)}
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
