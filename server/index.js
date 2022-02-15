const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cor');

const app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

