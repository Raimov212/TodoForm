import React from "react";
import { Label, Input } from "reactstrap";

const Todo = ({ todo, toggleTodos }) => {
  const handleTodoClick = () => {
    toggleTodos(todo.id);
  };

  return (
    <div>
      <Label>
        <Input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </Label>
    </div>
  );
};

export default Todo;
