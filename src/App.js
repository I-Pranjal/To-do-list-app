import React, { useState} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to` add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  return (
    <div className="App">

      <h1>To-Do List</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask} addTask={addTask} />
      
      
      {tasks.map(task => (
        <TaskInput
          key={task.id}
          task={task.text}
          onDelete={() => deleteTask(task.id)} // Pass onDelete callback
        />
      ))}


    </div>
  );
}

export default App;
