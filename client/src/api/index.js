import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/tasks',
});

const createTask = (payload) => api.post('/', payload);
const findAllTasks = () => api.get('/')
const deleteById = (id) => api.delete(`/${id}`);

const apis = {
  createTask,
  findAllTasks,
  deleteById
};

export default apis;
