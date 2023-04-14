// Creating Routers
const express = require('express');
const { 
    httpGetAllEmployees, 
    httpGetEmployeeById, 
    httpAddEmployee, 
    httpDeleteEmployeeWithId,
    httpUpdateEmployee
} = require('./employee.controller');

// Creating a Express Router to handle routes
const employeeRouter = express.Router();

// Different routes this EmployeeRouter will handle
employeeRouter.get('/getallemp', httpGetAllEmployees);
employeeRouter.post('/getemployeebyid', httpGetEmployeeById);
employeeRouter.post('/addemployee', httpAddEmployee);
employeeRouter.put('/updateemployee', httpUpdateEmployee);
employeeRouter.delete('/deleteemployee', httpDeleteEmployeeWithId);

module.exports = employeeRouter;