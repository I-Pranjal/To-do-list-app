// TaskList.js
import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './list.css';

const TaskList = ({ tasks, deleteTask, addTask }) => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = () => {
    if (item.trim() !== '') {
      addTask(item);
      setItem('');
    }
  };

  return (
    <div className='box'>
      <FloatingLabel label="Enter your task" style={{ width: "30vw" }}>
        <Form.Control type="text" value={item} onChange={handleChange} />
      </FloatingLabel>
      <Button variant="outline-warning" className='del' onClick={handleAdd}>Add Task</Button>
    </div>
  );
};

export default TaskList;
