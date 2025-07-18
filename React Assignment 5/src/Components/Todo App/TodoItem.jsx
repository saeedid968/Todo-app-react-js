import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{todo.text}</span>
      <div>
        <Button
          variant="outline-warning"
          size="sm"
          className="me-2"
          onClick={() => onEdit(todo)}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
