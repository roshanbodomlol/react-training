import React from 'react';

const TodoItem = ({ text, onUpdate, isComplete }) => {
  const classes = isComplete ? 'todo-item red' : 'todo-item';

  return (
    <div className={classes} onClick={onUpdate}>
      {text}
    </div>
  );
}

export default TodoItem;
