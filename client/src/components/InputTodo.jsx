import React, { useContext, useState } from "react";
import { TodoContext } from "./HomePage";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = () => {
    // logic to submit task
    if (!title || !desc) {
      alert("Enter complete details!!!");
      return;
    }
    setTodos([...todos, { id:todos.length, title, desc }]);
    setTitle("");
    setDesc("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default InputTodo;
