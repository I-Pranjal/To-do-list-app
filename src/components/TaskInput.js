import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './input.css';

const TaskInput = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className='item-box'>
      <Form.Check
        aria-label="option 1"
        className='cont'
        onChange={handleCheckboxChange}
        checked={completed}
      />
      <h3 className={`${completed ? 'completed' : ''}`}>{task}</h3>
      <Button variant="danger" className='cont' onClick={handleDelete}>Delete task</Button>
    </div>
  );
}

export default TaskInput;
