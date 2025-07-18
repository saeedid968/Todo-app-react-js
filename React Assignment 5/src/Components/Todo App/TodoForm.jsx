import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const TodoForm = ({ onAdd, onUpdate, editTodo }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText('');
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editTodo) {
      onUpdate(editTodo.id, text);
    } else {
      onAdd(text);
    }

    setText('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="todoInput">
        <Form.Control
          type="text"
          placeholder={editTodo ? '✏️ Edit todo...' : '➕ Add a new todo...'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <div className="text-end mt-2">
        <Button variant={editTodo ? 'warning' : 'primary'} type="submit">
          {editTodo ? 'Update' : 'Add'}
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
