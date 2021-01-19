import React, { useState } from 'react';

export default function Exersice3() {
  const [todos, setTodo] = useState([]);
  const [desc, setDesc] = useState('');
  const addTodo = (e) => {
    const newTodo = {
      id: todos.length + 1,
      description: desc,
    };
    setTodo([...todos, newTodo]);
    setDesc('');
  };
  const handleChange = (e) => {
    setDesc(e.target.value);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };
  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" value={desc} />
      <button onClick={addTodo}>ADD</button>

      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <div>
              <p> {todo.description} </p>
              <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
}
