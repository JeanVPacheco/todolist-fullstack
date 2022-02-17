import React from 'react';
import apis from '../api';

const TaskCard = ({task, fetchTasks}) => {
  const { _id, title, description, status } = task;

  const deleteTask = async (taskId) => {
    await apis.deleteById(taskId);
    fetchTasks();
  };

  return (
    <div className='single-task'>
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <button
        type='button'
        className='btn-delete-task'
        onClick={() => deleteTask(_id)}
      >
        X
      </button>
    </div>
  )
};

export default TaskCard;
