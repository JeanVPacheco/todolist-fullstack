const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorMiddleware = require('./utils/errorMiddleware');

const app = express();

const PORT = 3001;

const {
  taskController,
} = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/tasks', taskController.findAllTasks);
app.post('/tasks', taskController.createTask);
app.put('/tasks/:id', taskController.editById);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(errorMiddleware);
