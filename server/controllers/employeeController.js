const { Employee, Department } = require('../models');
const { successResponse, errorResponse } = require('../utils/response');

const createEmployee = async (req, res) => {
  const { firstName, lastName, email, departmentId, hireDate, salary } = req.body;

  try {

    const existingEmployee = await Employee.findOne({ where: { email } });
    if (existingEmployee) {
      return errorResponse(res, 'Email already exists', 400);
    }

            const department = await Department.findByPk(departmentId);
            if (!department) return errorResponse(res, 'Department not found', 404);
        
    const employee = await Employee.create({
      firstName,
      lastName,
      email,
      departmentId,
      hireDate,
      salary,
    });

    return successResponse(res, {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      departmentId: employee.departmentId,
      hireDate: employee.hireDate,
      salary: employee.salary,
    }, 'Employee created successfully', 201);
  } catch (error) {
    return errorResponse(res, 'Error creating employee', 500, error.message);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    return successResponse(res, employees, 'Employees retrieved successfully');
  } catch (error) {
    return errorResponse(res, 'Error retrieving employees', 500, error.message);
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return errorResponse(res, 'Employee not found', 404);
    }
    return successResponse(res, employee, 'Employee retrieved successfully');
  } catch (error) {
    return errorResponse(res, 'Error retrieving employee', 500, error.message);
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, departmentId, hireDate, salary } = req.body;

  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return errorResponse(res, 'Employee not found', 404);
    }

        const department = await Department.findByPk(departmentId);
        if (!department) return errorResponse(res, 'Department not found', 404);
    
        if (email && email !== employee.email) {
          const existing = await Employee.findOne({ where: { email } });
          if (existing && existing.id !== employee.id) {
            return errorResponse(res, 'Email already exists', 400);
          }
        }

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.email = email;
    employee.departmentId = departmentId;
    employee.hireDate = hireDate;
    employee.salary = salary;

    await employee.save();

    return successResponse(res, employee, 'Employee updated successfully');
  } catch (error) {
    return errorResponse(res, 'Error updating employee', 500, error.message);
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return errorResponse(res, 'Employee not found', 404);
    }

    await employee.destroy();

    return successResponse(res, null, 'Employee deleted successfully');
  } catch (error) {
    return errorResponse(res, 'Error deleting employee', 500, error.message);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
