const express = require('express');
const employeeRouter = require('./routes/employee.router');

const app = express();

// Adding the middleware used by the server
app.use(express.json());
app.use(employeeRouter)

module.exports = app;