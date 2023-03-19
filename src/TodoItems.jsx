/**
 * *** SAMPLE CODE ***
 */
import React, { useState } from 'react';

// Example to-do component
function Todo({ name, toggle }) {
    return (
        <div onClick={toggle}>{name}</div>
    );
}

/**
 * Skeleton function to display a list of to-do items and perform CRUD operations on the entries
 * used as an example of how to use dan's CRUD functions
 */
export default function TodoItems () {
    const [todos, setTodos] = useState([]);
    const [todoId, setTodoId] = useState(0);

    const createTodo = (title) => {
        const newTodo = {
            id: todoId,
            title: title,
            done: false,
        };
        setTodoId(todoId + 1);
        setTodos([...todos, newTodo]);
    }

    const toggleDone = (id) => {
        const todoId = todos.findIndex((entry => entry.id === id));
        todos[todoId].done = !todos[todoId].done;
        setTodos(todos);
        console.log(todos.map(entry => entry.done));
    }

    const deleteTodo = (id) => {
        const updatedTodo = todos.filter(entry => entry.id !== id);
        setTodos(updatedTodo);
    }

    return (
        <>
            <button onClick={() => createTodo("entry")}>New Entry</button>
            {todos.map(entry => (
                <Todo key={entry.id} name={entry.title} toggle={() => toggleDone(entry.id)} />
            ))}
        </>
    )

}