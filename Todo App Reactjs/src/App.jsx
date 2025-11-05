import React, { useState, useEffect } from "react";
import TodoForm from "./Components/Todo App/TodoForm";
import TodoList from "./Components/Todo App/TodoList";
import ThemeToggle from "./Components/Todo App/ThemeToggle";
import "./App.css"; // your custom styles only

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };
  const deleteAllTodos = () => {
    setTodos([]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <div className="app-header">
          <h2>Todo App</h2>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <TodoForm
          onAdd={addTodo}
          onUpdate={updateTodo}
          editTodo={editTodo}
          onDeleteAll={deleteAllTodos}
        />

        <TodoList todos={todos} onEdit={setEditTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
