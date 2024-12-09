import React from "react";

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div>
      <p>{todo.text}</p>
      <p>{todo.selectValue}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
