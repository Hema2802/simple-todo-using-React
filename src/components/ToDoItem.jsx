
// importing components and hooks
import React, { useState } from 'react';

// props passing

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
    
  const [isEditing, setIsEditing] = useState(false);    // creating state variables
  const [editText, setEditText] = useState(todo.text);

  // handle editing 

  const handleEdit = () => {   
    if (isEditing) {   // editing is true means input text
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);    // initially editing false
  };

  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={todo.completed}    // check box click-completed
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}  // input value
          onChange={(e) => setEditText(e.target.value)}  
        />
      ) : (
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>  // analze completed
      )}
      <button className='edit-btn' onClick={handleEdit}>{isEditing ? 'Save ✔' : 'Edit 🖍'}</button>  
      {/* handle edit button */}
      <button className="del-btn"onClick={() => deleteTodo(todo.id)}>Delete 🗑</button>
      {/* handle delete button */}
    </div>
  );
}

export default ToDoItem;
