// Controller handles all the requests and responses
// It gets the data from the model and passes it to the router
// Router sends request to controller which it checks and passes to the model for data fetching
const {
    getAllEmployees,
    getAllEmployeesPaginated,
    addEmployee,
    getEmployeeById,
    deleteEmployeeWithId,
    updateEmployeeWithId,
} = require('../models/employee.model');
const { getPagination } = require('../query');











// Getting all the data in the employee with pagination 
async function httpGetAllEmployees(req, res) {
    const { skip, limit } = getPagination(req.query);
    // if Offset and Limit parameters are given then respond accordingly else give details of all the employees
    if(skip || limit){
        return res.status(200).json(await getAllEmployeesPaginated(skip, limit));
    }
    else{
        return res.status(200).json(await getAllEmployees());
    }
}









// Add new employee data to the employee table
async function httpAddEmployee(req, res) {
    const empdata = req.body;
    // Checking if the required fields are empty if not then respond with 400 status code(Bad Request) and error
    if (!empdata.Empid || !empdata.EmpName || !empdata.JobTitle || !empdata.PhoneNumber || !empdata.Email || !empdata.Address || !empdata.City || !empdata.State || !empdata.PrimaryEmergencyContact || !empdata.PECPhoneNumber || !empdata.PECRelationship || !empdata.SecondaryEmergencyContact || !empdata.SECPhoneNumber || !empdata.SECRelationship) {
        return res.status(400).json({
            error: 'Missing employee details please enter all the required details.',
        });
    }
    const checkIfEmployeePresent = await getEmployeeById(empdata.Empid);
    // Checking for duplicate Employee Id entry
    // As Employee Id is primary key hence it should have unique values
    if (checkIfEmployeePresent === 0) {
        const added = await addEmployee(empdata);
        // If server could not add the employee data then respond with internal server error with 500 status code
        if (added === 0) {
            return res.status(500).json({
                Error: `Server could not add employee data.`,
            });
        }
        return res.status(200).json({
            Message: 'Employee added succssfully',
            AddedEmployeeDetails: added
        });
    }
    else {
        return res.status(200).json({
            Error: `Employee with id ${empdata.Empid} already exists.`,
        });
    }
}

// Fetch Employee data by their Id
async function httpGetEmployeeById(req, res) {
    const reqEmpid = req.body.Empid;
    const emybyid = await getEmployeeById(reqEmpid);
    // If no employee with the requested id is found respond with a employee not found message
    if (emybyid === 0) {
        return res.status(200).json({
            Message: `No employee with id ${reqEmpid} was found.`,
        });
    }
    return res.status(200).json(emybyid);
}

// Delete all employee details using their Id
async function httpDeleteEmployeeWithId(req, res) {
    const reqEmpid = req.body.Empid;
    const checkIfEmployeePresent = await getEmployeeById(reqEmpid);
    // Check if employee with that is is present or not. If not then respond with employee not found message
    if (checkIfEmployeePresent === 0) {
        return res.status(200).json({
            Message: `No employee with id ${reqEmpid} was found.`
        });
    }
    else {
        const deletedEmp = await deleteEmployeeWithId(reqEmpid);
        // If server could not delete the employee data then respond with internal server error with 500 status code
        if (deletedEmp === 0) {
            return res.status(500).json({
                Error: `Server could not delete employee with id ${reqEmpid}.`
            });
        }
        return res.status(200).json({
            Message: `Employee with id ${reqEmpid} deleted successfully`,
            DeletedEmployee: deletedEmp
        });
    }
}

// Update data of a employee with the specified Id
async function httpUpdateEmployee(req, res) {
    const emp = req.body;
    const reqEmpid = req.body.Empid;
    const checkIfEmployeePresent = await getEmployeeById(reqEmpid);
    // Chekc if the employee with that Id is present or not
    if (checkIfEmployeePresent === 0) {
        return res.status(400).json({
            Error: `There is no employee with id ${reqEmpid}.`
        });
    }
    else {
        const updatedEmployee = await updateEmployeeWithId(emp, reqEmpid);
        if (updatedEmployee === 0) {
            // If server could not update the employee data then respond with internal server error with 500 status code
            return res.status(500).json({
                Error: `Server could not update employee details with id ${reqEmpid}.`
            });
        }
        return res.status(200).json({
            Message: `Employee with id ${reqEmpid} updated successfully`,
            UpdatedEmployee: updatedEmployee
        });
    }
}

module.exports = {
    httpGetAllEmployees,
    httpGetEmployeeById,
    httpAddEmployee,
    httpDeleteEmployeeWithId,
    httpUpdateEmployee
};