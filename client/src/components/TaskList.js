import React, { useEffect, useState } from 'react';
import apis from '../api';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = async () => {
    setIsLoading(true);
    const { data: { tasks }} = await apis.findAllTasks();
    setIsLoading(false);
    console.log('fetch tasks');
    console.log(tasks);
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const loadingElement = <p>Loading...</p>;

  const taskList = tasks.map((task) => {
    return <TaskCard task={task} fetchTasks={fetchTasks} key={task._id} />
  })

  return (
    <div className='task-list-component'>
      { isLoading ? loadingElement : taskList}
    </div>
  )
}

export default TaskList;
