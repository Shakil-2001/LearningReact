import Header from './Header';
import Add from './Add';
import Tasks from './Tasks';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import { useState } from 'react';

function ToDoList() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'wash clothes',
        day: '25/01/2022',
        complete: false
    }, 
    {
        id: 2,
        text: 'complete assignment',
        day: '27/01/2022',
        complete: false
    },
    {
        id: 3,
        text: 'Personal Project',
        day: '29/01/2022',
        complete: false
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const complete = false;
    const newTask = {id, ...task, complete};
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => (
    setTasks(tasks.filter((task) => task.id !== id))
  ); 

  const complete = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, complete: !task.complete} : task))
  };

  return (
    <div className="py-5">
      <Container>
        <Card border='1'>
          <div className="m-2">
            <Header/>
            <Add onAdd={addTask}/>

            <Tasks tasks={tasks} onDelete={deleteTask} onComplete={complete}/>
          </div>
          
        </Card>
      </Container>
    </div>
  );
}

export default ToDoList;