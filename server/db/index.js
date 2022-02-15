const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/tasks';
const DB_NAME = 'tasks';

module.exports = () => mongodb.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
