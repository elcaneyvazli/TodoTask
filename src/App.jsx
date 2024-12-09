import { useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const addTodo = (text, selectValue) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false, selectValue },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
