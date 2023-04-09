import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Declare state variables todos and title using useState hook
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  // Define function to create a new todo item
  const createTodo = (title) => {
    const lastTodoId = todos.length > 0 ? todos[todos.length - 1].id : 0;
    const newTodo = {
      id: lastTodoId + 1,
      title: title,
      done: false,
    };
    // Add newTodo to the todos state array using setTodos
    setTodos([...todos, newTodo]);
  };

  // Define function to toggle the 'done' property of a todo item
  const toggleDone = (id) => {
    // Find the index of the todo item with the matching id
    const todoId = todos.findIndex((task) => task.id === id);
    // Toggle the 'done' property of the todo item
    todos[todoId].done = !todos[todoId].done;
    // Update the todos state array using setTodos
    setTodos([...todos]);
  };

  // Define function to delete a todo item
  const deleteTodo = (id) => {
    // Remove the todo item with the matching id from the todos state array
    const updatedTodo = todos.filter((task) => task.id !== id);
    // Update the todos state array using setTodos
    setTodos(updatedTodo);
  };

  // Load todos from localStorage when the component mounts using useEffect hook
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to localStorage when the todos state array changes using useEffect hook
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    // Render the component content
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
          type="text"
        ></input>
        <button type="submit">New Task</button>
      </form>
      <ul>
        {/* Map over the todos state array and render a list item for each todo */}
        {todos.map((task, i) => (
          <li key={task.id} className={task.done ? "done" : ""}>
            <input
              type="checkbox"
              onChange={() => toggleDone(task.id)}
              checked={task.done}
            />
            <span className="title">
              {i + 1}. {task.title}
            </span>
            <button
              onClick={() => {
                deleteTodo(task.id);
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
