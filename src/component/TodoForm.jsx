import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [selectValue, setSelectValue] = useState("inProgress");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text, selectValue);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="inProgress">in Progress</option>
          <option value="done">Done</option>
        </select>
        <button>Send Data</button>
      </form>
    </div>
  );
}
