import React, { useContext, useState } from "react";
import axios from 'axios';
import { TodoContext } from "./HomePage";

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = async () => {
    // logic to submit task
    try {
      if (!title || !desc) {
        alert("Enter complete details!!!");
        return;
      }
      const response = await axios.post("http://localhost:5000/todos", {
        title,
        desc,
      });
      setTodos(response.data.data);
      setTitle("");
      setDesc("");
    } catch (error) {
      console.error(error);
    }
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
