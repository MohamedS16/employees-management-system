const express = require('express');
const { body, param } = require('express-validator');
const departmentController = require('../controllers/departmentController');
const authenticate  = require('../middleware/authMiddleware');
const { validateRequest } = require('../middleware/validateRequest');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Department name is required'),
    body('name').isLength({ max: 255 }).withMessage('Department name cannot be more than 255 characters'),
  ],
  validateRequest,
  authenticate,
  departmentController.createDepartment
);

router.get('/', authenticate, departmentController.getAllDepartments);

router.put(
  '/:id',
  [
    param('id').isInt().withMessage('Department ID must be a number'),
    body('name').notEmpty().withMessage('Department name is required'),
    body('name').isLength({ max: 255 }).withMessage('Department name cannot be more than 255 characters'),
  ],
  validateRequest,
  authenticate,
  departmentController.updateDepartment
);

router.delete(
  '/:id',
  [
    param('id').isInt().withMessage('Department ID must be a number'),
  ],
  validateRequest,
  authenticate,
  departmentController.deleteDepartment
);

module.exports = router;
