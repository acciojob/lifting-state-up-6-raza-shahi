import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList.js";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build ToDo App", completed: false },
    { id: 3, task: "Practice Coding", completed: false },
  ]);
  console.log(todos);
  function handleComplete(id) {
    const todoUpdated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo,
    );
    setTodos(todoUpdated);
  }
  return (
    <div>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
