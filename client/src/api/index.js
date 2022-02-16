import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/tasks',
});

export const createTask = (payload) => api.post('/', payload);

const apis = {
  createTask
};

export default apis;
