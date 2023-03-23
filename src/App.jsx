import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    const todoId = todos.findIndex((entry) => entry.id === id);
    todos[todoId].done = !todos[todoId].done;
    setTodos([...todos]);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todos.filter((entry) => entry.id !== id);
    setTodos(updatedTodo);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title === "") {
            alert("Cannot add an empty task");
            return;
          }
          createTodo(title);
          setTitle("");
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
          placeholder="Enter a new task"
        ></input>
        <button type="submit">New Entry</button>
      </form>
      <ul>
        {todos.map((entry, i) => (
          <li key={entry.id} className={entry.done ? "done" : ""}>
            <input type="checkbox" onChange={() => toggleDone(entry.id)} />
            {i}. {entry.title}
            <button
              onClick={() => {
                deleteTodo(entry.id);
              }}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
