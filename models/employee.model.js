// Importing Employee Schema
const { Employee } = require('./employee.mysql');

// Get all the data present in the employee table 
async function getAllEmployees(){
    return await Employee.findAll();
}

// Get all the data present in the employee table with pagination
async function getAllEmployeesPaginated(skip, limit) {
    const allEmployees=await Employee.findAll({offset:skip, limit:limit});
    return allEmployees;
}

// Add new employee data to the table
async function addEmployee(empdata) {
    try {
        const addedEmpData = await Employee.create({
            Empid: empdata.Empid,
            EmpName: empdata.EmpName,
            JobTitle: empdata.JobTitle,
            PhoneNumber: empdata.PhoneNumber,
            Email: empdata.Email,
            Address: empdata.Address,
            City: empdata.City,
            State: empdata.State,
            PrimaryEmergencyContact: empdata.PrimaryEmergencyContact,
            PECPhoneNumber: empdata.PECPhoneNumber,
            PECRelationship: empdata.PECRelationship,
            SecondaryEmergencyContact: empdata.SecondaryEmergencyContact,
            SECPhoneNumber: empdata.SECPhoneNumber,
            SECRelationship: empdata.SECRelationship,
        });
        return addedEmpData;
    } catch (error) {
        console.error('Error occured while adding employee details: ', error);
        return 0;
    }
}

// Fetching data of a single employee using their Employee Id (Empid)
async function getEmployeeById(id) {
    const employeebyid = await Employee.findOne({
        where: { Empid: id }
    });
    // Check whether a employee with than id is present or not
    if (employeebyid === null) {
        return 0;
    }
    return employeebyid;
}

// Deleting the employee details using their Employee Id (Empid)
async function deleteEmployeeWithId(id) {
    try {
        const deletedEmployee = await Employee.destroy({
            where: { Empid: id }
        });
        return deletedEmployee;
    } catch (error) {
        console.error(`Error occured while deleting employee with id: ${id}`, error);
        return 0;
    }
}

// Updating specific information of an employee using their ID
async function updateEmployeeWithId(emp, id) {
    try {
        // below ... is the javascript spread operator it is used because the number of value to be updated could be more than one and we cannot tell which values are to be updated
        const updatedEmployee = await Employee.update({ ...emp }, {
            where: { Empid: id }
        });
        return updatedEmployee;
    }
    catch (error) {
        console.error(`Error occured while updating employee details with id: ${id}`, error);
        return 0;
    }
}

module.exports = {
    getAllEmployees,
    getAllEmployeesPaginated,
    getEmployeeById,
    addEmployee,
    deleteEmployeeWithId,
    updateEmployeeWithId
}