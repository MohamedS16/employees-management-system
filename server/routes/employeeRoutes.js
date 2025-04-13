const express = require('express');
const { body, param } = require('express-validator');
const employeeController = require('../controllers/employeeController');
const authenticate  = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.post(
  '/',
  [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('departmentId').notEmpty().withMessage('Department is required'),
    body('hireDate').isDate().withMessage('Valid hire date is required'),
    body('salary').isFloat({ min: 0 }).withMessage('Salary must be a positive number'),
  ],
  validateRequest,
  authenticate,
  employeeController.createEmployee
);

router.get('/', authenticate, employeeController.getAllEmployees);
router.get('/count', authenticate, employeeController.getAllEmployeesCount);
router.get('/newHires', authenticate, employeeController.getNewHires);

router.get(
  '/:id',
  [
    param('id').isInt().withMessage('Employee ID must be a number'),
  ],
  validateRequest,
  authenticate,
  employeeController.getEmployeeById
);

router.put(
  '/:id',
  [
    param('id').isInt().withMessage('Employee ID must be a number'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('departmentId').notEmpty().withMessage('departmentId is required'),
    body('hireDate').isDate().withMessage('Valid hire date is required'),
    body('salary').isFloat({ min: 0 }).withMessage('Salary must be a positive number'),
  ],
  validateRequest,
  authenticate,
  employeeController.updateEmployee
);

router.delete(
  '/:id',
  [
    param('id').isInt().withMessage('Employee ID must be a number'),
  ],
  validateRequest,
  authenticate,
  employeeController.deleteEmployee
);

module.exports = router;
