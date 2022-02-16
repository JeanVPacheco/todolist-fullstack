import React, { useEffect, useState } from 'react';
import apis from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTasks = async () => {
      const { data: { tasks }} = await apis.findAllTasks();
      setTasks(tasks);
    };
    fetchTasks();   
    setIsLoading(false);
  }, []);

  const loadingElement = <p>Loading...</p>;

  const taskList = tasks.map((task) => {
    return <div className='single-task' key={task._id}>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.status}</p>
    </div>
  })

  return (
    <div className='task-list-component'>
      { isLoading ? loadingElement : taskList}
    </div>
  )
}

export default TaskList;
