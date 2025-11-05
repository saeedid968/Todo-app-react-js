import React, { useState, useEffect } from 'react';

const TodoForm = ({ onAdd, onUpdate, editTodo, onDeleteAll }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editTodo) setText(editTodo.text);
    else setText('');
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editTodo) onUpdate(editTodo.id, text);
    else onAdd(text);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder={editTodo ? "Edit todo..." : "Add a new task..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />

      <button type="submit" className="todo-btn">
        {editTodo ? "Update" : "Add"}
      </button>

      <button
        type="button"
        className="todo-btn delete-btn"
        onClick={onDeleteAll}
      >
        Delete
      </button>
    </form>
  );
};

export default TodoForm;
