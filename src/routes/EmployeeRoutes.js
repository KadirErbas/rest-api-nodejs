import express from 'express';
import {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from '../controllers/EmployeeController.js';

const router = express.Router();

// Get all employees
router.get('/', getEmployees);

// Get employee by ID
router.get('/:id', getEmployeeById);

// Create new employee
router.post('/', createEmployee);

// Update employee by ID
router.put('/:id', updateEmployee);

// Partial update employee by ID
router.patch('/:id', updateEmployee); // Using the same controller for partial updates

// Delete employee by ID
router.delete('/:id', deleteEmployee);

export default router;