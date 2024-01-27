import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import InputTodo from "./InputTodo";
import ShowTodo from "./ShowTodo";

export const TodoContext = createContext();

const HomePage = () => {
    const [todos, setTodos] = useState([]);

    const fetchAllTodos = async () => {
        try {
            const response = await axios.get(
              "https://todo-be-5ea3.onrender.com/todos",
            );
            setTodos(response.data.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAllTodos();
    }, [])

  return (
      <TodoContext.Provider value={{ todos, setTodos }}>
          <h3>The current count for todos is: {todos.length}</h3>
      <InputTodo />
      <ShowTodo />
    </TodoContext.Provider>
  );
};

export default HomePage;
