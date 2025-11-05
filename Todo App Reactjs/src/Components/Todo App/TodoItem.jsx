import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>

      <div className="actions">
        <button className="todo-btn" onClick={() => onEdit(todo)}>
          Edit
        </button>
        <button
          className="todo-btn"
          style={{ background: "crimson" }}
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
