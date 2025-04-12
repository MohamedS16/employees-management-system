const { Department } = require('../models');
const { successResponse, errorResponse } = require('../utils/response');

const createDepartment = async (req, res) => {
  const { name } = req.body;

  try {
    const department = await Department.create({ name });

    return successResponse(res, {
      id: department.id,
      name: department.name,
    }, 'Department created successfully', 201);
  } catch (error) {
    return errorResponse(res, 'Error creating department', 500, error.message);
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll();
    return successResponse(res, departments, 'Departments retrieved successfully');
  } catch (error) {
    return errorResponse(res, 'Error retrieving departments', 500, error.message);
  }
};

const updateDepartment = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return errorResponse(res, 'Department not found', 404);
    }

    department.name = name;
    await department.save();

    return successResponse(res, {
      id: department.id,
      name: department.name,
    }, 'Department updated successfully');
  } catch (error) {
    return errorResponse(res, 'Error updating department', 500, error.message);
  }
};

const deleteDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const department = await Department.findByPk(id);
    if (!department) {
      return errorResponse(res, 'Department not found', 404);
    }

    await department.destroy();

    return successResponse(res, null, 'Department deleted successfully');
  } catch (error) {
    return errorResponse(res, 'Error deleting department', 500, error.message);
  }
};

module.exports = {
  createDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
};
