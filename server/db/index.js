const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/todolist';
const DB_NAME = 'todolist';

module.exports = () => mongodb.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
