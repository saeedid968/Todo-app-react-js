import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onEdit, onDelete }) => {
  if (todos.length === 0) {
    return <p className="text-center text-muted">No todos yet. Add one above! 😊</p>;
  }

  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
