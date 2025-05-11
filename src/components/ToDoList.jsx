// importing components and hooks 
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  // props passing
  return (
    <div>
      {/* mapping todos */}
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}   // unique id
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;
