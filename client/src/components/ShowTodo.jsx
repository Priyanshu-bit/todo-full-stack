import React, { useContext, useState } from "react";
import { TodoContext } from "./HomePage";
import axios from "axios";

const ShowTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateId, setUpdateId] = useState("-1");
  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/todos/${_id}`);
      setTodos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const intializeUpdate = (_id, _title, _desc) => {
    setTitle(_title);
    setDesc(_desc);
    setUpdateId(_id);
  };

  const handleUpdate = async () => {
    // const data = [];
    // todos.map((todo) => {
    //   if (todo.id === updateId) {
    //     data.push({ id: updateId, title, desc });
    //   } else {
    //     data.push(todo);
    //   }
    // });
    try {
      const response = await axios.put(
        `http://localhost:5000/todos/${updateId}`,
        {
          title,
          desc,
        },
      );

      setTodos(response.data.data);
      setUpdateId(-1);
    } catch (error) {}
  };

  return (
    <div>
      <table style={{ borderSpacing: "1rem" }}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
          <th>Actions</th>
        </tr>
        {todos.map((todo, id) => {
          return (
            <tr key={id}>
              <td>{todo._id}</td>
              {updateId === todo._id ? (
                <>
                  <td>
                    <input
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      value={desc}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Save Changes</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{todo.title}</td>
                  <td>{todo.desc}</td>
                  <td>
                    <button
                      onClick={() =>
                        intializeUpdate(todo._id, todo.title, todo.desc)
                      }
                    >
                      Update
                    </button>
                  </td>
                </>
              )}
              <td>
                <button onClick={() => handleDelete(todo._id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ShowTodo;
