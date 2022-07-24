import React from "react";
import Todo from "./Todo";

const TodosList = ({ todos,toggleTodos }) => {
  return( 
      todos.map(todo => {
    return <Todo key={todo.id} toggleTodos={toggleTodos} todo={todo} />;
  })
  )
};

export default TodosList;
