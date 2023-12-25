const express = require('express'); 
const logger = require('./middlewares/logger');

const app = express();

app.use(logger);