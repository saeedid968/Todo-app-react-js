import React, { useState } from 'react';
import TodoForm from './Components/Todo App/TodoForm';
import TodoList from './Components/Todo App/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo)));
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">📋 Todo App </h2>
            <TodoForm
              onAdd={addTodo}
              onUpdate={updateTodo}
              editTodo={editTodo}
            />
            <TodoList
              todos={todos}
              onEdit={setEditTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
