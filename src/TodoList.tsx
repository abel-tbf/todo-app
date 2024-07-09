import { useState } from 'react';
import { useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DELETE_TODO, UPDATE_TODO, TOGGLE_COMPLETE } from "./store";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList({todos}: {todos: ITodo[]}) {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState<number|null>(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };
  
  const saveEdit = (id: number) => {
    dispatch({type: UPDATE_TODO, payload: {id, text: editingText} });
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
                <button onClick={() => dispatch({type: DELETE_TODO, payload: todo.id})}>Delete</button>
                <button
                  className="complete"
                  onClick={() => dispatch({type: TOGGLE_COMPLETE, payload: todo.id})}
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
