import React, { createContext, useState } from "react";
import InputTodo from "./InputTodo";
import ShowTodo from "./ShowTodo";

export const TodoContext = createContext();

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  return (
      <TodoContext.Provider value={{ todos, setTodos }}>
          <h3>The current count for todos is: {todos.length}</h3>
      <InputTodo />
      <ShowTodo />
    </TodoContext.Provider>
  );
};

export default HomePage;
