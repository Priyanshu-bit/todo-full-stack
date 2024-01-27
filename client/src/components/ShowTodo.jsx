import React, { useContext, useState } from "react";
import { TodoContext } from "./HomePage";

const ShowTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateId, setUpdateId] = useState("-1");
  const handleDelete = (_id) => {
    // await axios.delete("url/:id", )
    const newTodos = todos.filter(({ id }) => {
      return id !== _id;
    });
    setTodos(newTodos);
  };

  const intializeUpdate = (_id, _title, _desc) => {
    setTitle(_title);
    setDesc(_desc);
    setUpdateId(_id);
  };

  const handleUpdate = () => {
    const data = [];
    todos.map((todo) => {
      if (todo.id === updateId) {
        data.push({ id: updateId, title, desc });
      } else {
        data.push(todo);
      }
    });
    setTodos(data);
    setUpdateId(-1);
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
              <td>{todo.id}</td>
              {updateId === todo.id ? (
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
                        intializeUpdate(todo.id, todo.title, todo.desc)
                      }
                    >
                      Update
                    </button>
                  </td>
                </>
              )}
              <td>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ShowTodo;
