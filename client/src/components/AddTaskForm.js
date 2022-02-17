import React, { useState } from 'react';
import apis from '../api';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const canAddTask = Boolean(title && description && status);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const onCreateTask = async () => {
    const payload = { title, description, status };
    await apis.createTask(payload);

    window.alert('Task added succesfully');

    setTitle('');
    setDescription('');
    setStatus('');
  }

  return (
    <section className='create-task-form-section'>
      <h2>New Task</h2>
        <div className='task-form'>
          <label htmlFor='title'>
            Title:
            <input
              id='title'
              name='title'
              onChange={onTitleChange}
              type='text'
              value={title}
            />
          </label>
          <label htmlFor='description'>
            Description:
            <input
              id='description'
              name='description'
              onChange={onDescriptionChange}
              type='text'
              value={description}
            />
          </label>
          <label htmlFor='status'>
            Status:
            <input
              id='status'
              name='status'
              onChange={onStatusChange}
              type='text'
              value={status}
            />
          </label>
        </div>
        <button type='button' className='add-task-button' onClick={onCreateTask} disabled={!canAddTask}>
          Add new task
        </button>
    </section>
  )
}

export default AddTaskForm;
