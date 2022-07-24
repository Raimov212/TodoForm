import React, { useState, useRef, useEffect } from "react";
import TodosList from "./TodosList";
import { Button } from "antd";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodos = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const handleClick = e => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prev => {
      return [...prev, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClearTodo = id => {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="d-flex">
        <input ref={todoNameRef} type="text" style={{ width: "200px" }} />
        <Button onClick={handleClick}>Add Todo</Button>
        <Button onClick={handleClearTodo}>Clear Todo</Button>
        <div className="d-flex">
          Todo List: <h5>{todos.filter(todo => !todo.complete).length}</h5>
        </div>
      </div>
      <TodosList todos={todos} toggleTodos={toggleTodos} />
    </div>
  );
};

export default App;
